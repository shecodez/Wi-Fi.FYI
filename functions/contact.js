const mailgun = require('mailgun-js')

const { MAILGUN_API_KEY, MAILGUN_DOMAIN, NO_REPLY_EMAIL_ADDRESS, CONTACT_EMAIL_ADDRESS } = process.env

// TODO: Upgrade mailgun. Sandbox subdomains are for test purposes only and not allowed to send mail.
const sendThankYouEmail = async (email) => {
  return new Promise((resolve, reject) => {
    // console.log('Sending the email')

    const mg = mailgun({
      apiKey: MAILGUN_API_KEY,
      domain: MAILGUN_DOMAIN,
    })

    const mailData = {
      from: NO_REPLY_EMAIL_ADDRESS,
      to: email,
      subject: 'Thank you for your interest',
      text: 'I\'ll get back to you asap!',
    }

    mg.messages().send(mailData, (err) => {
      if (err)
        return reject(err)

      resolve()
    })
  })
}

const sendContactFormEmail = async (formData) => {
  return new Promise((resolve, reject) => {
    const mg = mailgun({
      apiKey: MAILGUN_API_KEY,
      domain: MAILGUN_DOMAIN,
    })

    const mailData = {
      from: `${formData.name} <${formData.email}>`,
      to: CONTACT_EMAIL_ADDRESS,
      subject: `${formData.subject} 👋 vvifi.fyi/contact`.trim(),
      text: formData.message,
    }

    mg.messages().send(mailData, async (err) => {
      if (err)
        return reject(err)

      try {
        // send a thank you email
        // await sendThankYouEmail(formData.email)
      }
      catch (e) {
        return reject(e)
      }

      resolve()
    })
  })
}

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body)

    await sendContactFormEmail(data)

    // TODO: add user to newsletter
    /* if (data.joinTheFreeVvifi) {
      await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      })
    } */

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        message: 'success',
      }),
    }
  }
  catch (e) {
    // console.log('e', e)
    return {
      statusCode: 500,
      body: JSON.stringify({
        ok: false,
        message: e.mssage || e.errorMessage,
      }),
    }
  }
}
/*
TODO: to joinTheFreeVvifi checkbox add below to contact/index.json
{
  "$formkit": "checkbox",
  "name": "joinTheFreeVvifi",
  "type": "checkbox",
  "label": "Join the FREE VviFi (Newsletter)",
  "value": true,
  "classes": {
    "wrapper": "flex gap-2"
  }
},
*/
