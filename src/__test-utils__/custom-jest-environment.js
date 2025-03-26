/* eslint-disable @typescript-eslint/no-empty-function */
// __test-utils__/custom-jest-environment.js
// Stolen from: https://github.com/ipfs/jest-environment-aegir/blob/master/src/index.js
// Overcomes error from jest internals.. this thing: https://github.com/facebook/jest/issues/6248
'use strict'

const JestEnvironmentNode = require('jest-environment-node').TestEnvironment

class XMLHttpRequest {}

class MyEnvironment extends JestEnvironmentNode {
  constructor(config, context) {
    super(config, context)
    this.global.XMLHttpRequest = XMLHttpRequest
    this.global.Uint32Array = Uint32Array
    this.global.Uint16Array = Uint16Array
    this.global.Uint8Array = Uint8Array
    this.global.ArrayBuffer = ArrayBuffer
    this.global.window = {}
  }

  async setup() {
    await super.setup()
  }

  async teardown() {
    await super.teardown()
  }
}

module.exports = MyEnvironment
