'use strict'
/* eslint-env mocha */

let route = require('../lib/routes.js')
let chai = require('chai')
let expect = chai.expect

describe('Routes', function () {
  describe('HTTP Method defined', function () {
    it('#get()', function () {
      expect(route.hasOwnProperty('get')).to.equal(true)
    })

    it('#post()', function () {
      expect(route.hasOwnProperty('post')).to.equal(true)
    })

    it('#put()', function () {
      expect(route.hasOwnProperty('put')).to.equal(true)
    })

    it('#delete()', function () {
      expect(route.hasOwnProperty('delete')).to.equal(true)
    })

    it('#head()', function () {
      expect(route.hasOwnProperty('head')).to.equal(true)
    })

    it('#patch()', function () {
      expect(route.hasOwnProperty('patch')).to.equal(true)
    })
  })
  describe('Routes registration', function () {
    it('#index', function () {
      route.get('/index', function (req, resp) {
        return {'path': 'index', 'method': 'get'}
      })

      expect(route.allResources).to.have.property('/index')
      let _resource = route.allResources['/index']
      expect(Object.keys(_resource).length).to.equal(1)
      route.post('/index', function (req, resp) {
        return {'path': 'index', 'method': 'post'}
      })
      expect(Object.keys(_resource).length).to.equal(2)
    })
  })
})
