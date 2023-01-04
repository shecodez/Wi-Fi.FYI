const qs = require('querystring')
const { processEntry } = require('@staticman/netlify-functions')

const { REPO } = process.env

exports.handler = async (event, context, callback) => {
  const [username, repository] = REPO.split('/')
  const bodyData = qs.parse(event.body)

  event.queryStringParameters = {
    ...event.queryStringParameters,
    ...bodyData,
    username,
    repository,
  }

  const config = {
    origin: event.headers.origin,
    sites: {
      [REPO]: {
        allowedFields: ['name', 'email', 'message', 'post'],
        transforms: {
          email: 'md5',
        },
        branch: 'master',
        commitMessage: 'Add comment by {fields.name}',
        filename: '{fields.post}--{@timestamp}',
        format: 'json',
        generatedFields: {
          date: {
            type: 'date',
          },
        },
        moderation: false,
        path: 'content/comments',
        requiredFields: ['name', 'message', 'post'],
      },
    },
  }

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ event, context, config }),
  // }

  return processEntry(event, context, callback, config)
}
