import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import comment from './comment'

export default createSchema({
  name: 'comments',

  types: schemaTypes.concat([comment]),
})
