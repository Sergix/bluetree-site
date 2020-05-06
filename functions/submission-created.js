const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '7o23h513',
  dataset: 'comments',
  token: process.env.SANITY_TOKEN,
})

exports.handler = function(event, context, callback) {
  const { payload } = JSON.parse(event.body)

  if (payload.form_name !== 'contact') return

  const result = await client.create({ _type: 'comment', ...payload })
  callback(null, {
    statusCode: 200,
    body: 'Comment creation success',
  })
}
