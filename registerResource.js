'use strict'

// This variable will hold all the resources.
let resources = {}
let apiModel = require('./api-model.json')

function createResource (method, resource, handler, options) {
  let methodAttr = apiModel["method"]

  methodAttr[awsKey]["httpMethod"] = method.toUpperCase()

  if(!routes[resource])
    routes[resource] = {}

  routes[resource][method] = methodAttr
}
module.exports = {
  "create": 
}
