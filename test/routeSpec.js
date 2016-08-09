'use strict'
/* eslint-env mocha */

let route = require('../lib/routes.js')
let chai = require('chai')
let expect = chai.expect

describe('Routes', () => {
  describe('#get()', () => {
    it('Method is availble', () => {
      expect(route.hasOwnProperty('get')).to.equal(true)
    })
  })

  describe('#post()', () => {
    it('Method is availble', () => {
      expect(route.hasOwnProperty('post')).to.equal(true)
    })
  })

  describe('#put()', () => {
    it('Method is availble', () => {
      expect(route.hasOwnProperty('put')).to.equal(true)
    })
  })

  describe('#delete()', () => {
    it('Method is availble', () => {
      expect(route.hasOwnProperty('delete')).to.equal(true)
    })
  })

  describe('#head()', () => {
    it('Method is availble', () => {
      expect(route.hasOwnProperty('head')).to.equal(true)
    })
  })

  describe('#patch()', () => {
    it('Method is availble', () => {
      expect(route.hasOwnProperty('patch')).to.equal(true)
    })
  })
})
