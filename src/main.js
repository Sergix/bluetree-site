// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Unicon from 'vue-unicons'
import { uniFacebook, uniTwitter, uniLinkedin } from 'vue-unicons/src/icons'

require('typeface-gelasio')
require('typeface-roboto-slab')

Unicon.add([uniFacebook, uniTwitter, uniLinkedin])

export default function(Vue, { router, head, isClient }) {
  Vue.use(Unicon)

  head.meta.push({
    name: 'keywords',
    content: 'Landscaping,Grass,Yard,Work,Charleston,Lawn',
  })

  head.meta.push({
    name: 'author',
    content: 'Peyton McGinnis',
  })
}
