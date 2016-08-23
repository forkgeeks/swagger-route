'use strict'

// This variable will hold all the resources.
let resources = {}

function createResource (method, path, handler, options) {
  let pathItems = {}

  // TODO Get this from Options["Response"]["Content-Type"]
  pathItems['produces'] = ['application/json']

  // TODO Get this from Options["Request"]["Content-Type"]
  pathItems['consumes'] = ['application/json']

  // TODO Ideally should be grabbed from some config file
  pathItems['schemes'] = ['http', 'https']

  if (!resources[path]) {
    resources[path] = {}
  }

  resources[path][method] = pathItems
}
module.exports = {
  'create': createResource,
  'resources': resources
}
