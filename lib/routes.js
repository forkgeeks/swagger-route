'use strict'
let resource = require('./registerResource')

let Route = function route () {
  let self = this

  self.get = function (resource, handler, options) {
    resource.create("get", resource, handler, options)
  }

  self.post = function (resource, handler, options) {
    resource.create("post", resource, handler, options)
  }

  self.put = function (resource, handler, options) {
    resource.create("put", resource, handler, options)
  }

  self.delete = function (resource, handler, options) {
    resource.create("delete", resource, handler, options)
  }

  self.head = function (resource, handler, options) {
    resource.create("head", resource, handler, options)
  }

  self.patch = function (resource, handler, options) {
    resource.create("patch", resource, handler, options)
  }
}

module.exports = new Route()
