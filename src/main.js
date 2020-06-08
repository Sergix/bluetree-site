// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'typeface-gelasio'
import 'typeface-roboto-slab'
import Vuex from 'vuex'

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      comments: [],
    },
    mutations: {
      addComment(state, comment) {
        state.comments.push(comment)
      },
      setComments(state, comments) {
        state.comments = comments
      },
    },
  })

  head.htmlAttrs = { lang: 'en' }

  head.meta.push({
    name: 'keywords',
    content: 'Landscaping,Grass,Yard,Work,Charleston,Lawn',
  })

  head.meta.push({
    name: 'author',
    content: 'Peyton McGinnis',
  })
}
