'use strict'

let Route = function route () {
  let self = this

  self.get = () => {
    console.log('GET method')
  }
}

module.exports = new Route()
