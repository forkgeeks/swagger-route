'use strict'

let Route = function route () {
  let self = this

  self.get = function () {
    console.log('GET method')
  }

  self.post = function () {
    console.log('post method')
  }

  self.put = function () {
    console.log('put method')
  }

  self.delete = function () {
    console.log('delete method')
  }

  self.head = function () {
    console.log('head method')
  }

  self.patch = function () {
    console.log('patch method')
  }
}

module.exports = new Route()
