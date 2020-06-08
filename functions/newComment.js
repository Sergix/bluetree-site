const StoryblokClient = require('storyblok-js-client')
const spaceId = 85763
const commentFolderId = 12897631
const { STORYBLOK_API_KEY } = process.env

const getTimestamp = () => {
  const date = new Date()
  const year = date
    .getFullYear()
    .toString()
    .padStart(2, '0')
  const day = date
    .getDay()
    .toString()
    .padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const hour = date
    .getHours()
    .toString()
    .padStart(2, '0')
  const minute = date
    .getMinutes()
    .toString()
    .padStart(2, '0')

  return `${year}-${month}-${day} ${hour}:${minute}`
}

exports.handler = async function(event, context, callback) {
  console.log(event)

  const { name, rating, message } = JSON.parse(event.body)
  const timestamp = getTimestamp()
  const slug = name
    .trim()
    .toLowerCase()
    .split(' ')
    .join('-')
    .concat(`-${Date.now().toString()}`)

  const Storyblok = new StoryblokClient({
    oauthToken: STORYBLOK_API_KEY,
  })

  const response = await Storyblok.post(`spaces/${spaceId}/stories/`, {
    story: {
      name,
      slug,
      content: {
        component: 'comment',
        name,
        rating,
        message,
        timestamp,
      },
      parent_id: commentFolderId,
    },
    publish: 1,
  })

  callback(null, {
    statusCode: response.status,
    body: 'Function completed',
  })
}
