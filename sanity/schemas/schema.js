import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import comment from './comment'
import service from './service'

export default createSchema({
  name: 'bluetree',

  types: schemaTypes.concat([comment, service]),
})
