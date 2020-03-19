// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-gelasio')
require('typeface-roboto-slab')

export default function(Vue, { router, head, isClient }) {
  head.meta.push({
    name: 'keywords',
    content: 'Landscaping,Grass,Yard,Work,Charleston,Lawn',
  })

  head.meta.push({
    name: 'author',
    content: 'Peyton McGinnis',
  })
}
