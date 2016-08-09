'use strict'

let Route = function route () {
  let self = this

  self.get = () => {
    console.log('GET method')
  }

  self.post = () => {
    console.log('post method')
  }

  self.put = () => {
    console.log('put method')
  }

  self.delete = () => {
    console.log('delete method')
  }

  self.head = () => {
    console.log('head method')
  }

  self.patch = () => {
    console.log('patc method')
  }
}

module.exports = new Route()
