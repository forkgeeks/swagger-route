'use strict'
let resources = require('./registerResource')

let Route = function route () {
  let self = this

  self.get = function (resource, handler, options) {
    resources.create('get', resource, handler, options)
  }

  self.post = function (resource, handler, options) {
    resources.create('post', resource, handler, options)
  }

  self.put = function (resource, handler, options) {
    resources.create('put', resource, handler, options)
  }

  self.delete = function (resource, handler, options) {
    resources.create('delete', resource, handler, options)
  }

  self.head = function (resource, handler, options) {
    resources.create('head', resource, handler, options)
  }

  self.patch = function (resource, handler, options) {
    resources.create('patch', resource, handler, options)
  }

  self.toSwagger = function () {
    return 'swag'
  }
  self.allResources = resources.resources
}

module.exports = new Route()
