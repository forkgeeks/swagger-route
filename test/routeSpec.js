'use strict'
/* eslint-env mocha */

let route = require('../lib/routes.js')
let chai = require('chai')
let expect = chai.expect

describe('Routes', function () {
  describe('#get()', function () {
    it('Method is availble', function () {
      expect(route.hasOwnProperty('get')).to.equal(true)
    })
  })

  describe('#post()', function () {
    it('Method is availble', function () {
      expect(route.hasOwnProperty('post')).to.equal(true)
    })
  })

  describe('#put()', function () {
    it('Method is availble', function () {
      expect(route.hasOwnProperty('put')).to.equal(true)
    })
  })

  describe('#delete()', function () {
    it('Method is availble', function () {
      expect(route.hasOwnProperty('delete')).to.equal(true)
    })
  })

  describe('#head()', function () {
    it('Method is availble', function () {
      expect(route.hasOwnProperty('head')).to.equal(true)
    })
  })

  describe('#patch()', function () {
    it('Method is availble', function () {
      expect(route.hasOwnProperty('patch')).to.equal(true)
    })
  })
})
