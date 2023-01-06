// https://mailchimp.com/developer/marketing/guides/quick-start/#make-your-first-api-call
const crypto = require('crypto')
const mailchimp = require('@mailchimp/mailchimp_marketing')

const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID } = process.env

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX,
})

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
}

// async function callPing() {
//   const response = await mailchimp.ping.get()
//   console.log(response)
// }

exports.handler = async (event) => {
  // callPing()

  // Handle CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
    }
  }
  const { email } = JSON.parse(event.body)

  if (!email) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'error',
        error: 'Missing data: an E-Mail address is required',
      }),
    }
  }

  const subscriberHash = crypto.createHash('md5').update(email).digest('hex')

  try {
    const response = await mailchimp.lists.setListMember(
      MAILCHIMP_LIST_ID,
      subscriberHash,
      {
        email_address: email,
        status_if_new: 'pending',
      },
      { skipMergeValidation: true },
    )

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: response.status,
        email: response.email_address,
      }),
    }
  }
  catch (e) {
    const { title, status, detail } = e.response.body
    return {
      statusCode: status,
      headers,
      body: JSON.stringify({
        status: 'error',
        errorMessage: `${title} - ${detail}`,
      }),
    }
  }
}
