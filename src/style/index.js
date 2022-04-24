import global from './global'
import variables from './variables'

let externalConfig = {}

export default Object.assign({}, global, variables, externalConfig || {})