import { Curve25519Wrapper } from '@pastuxso/curve25519-typescript'

import * as Internal from './internal'
import { Curve } from './curve'

export * from './types'
export * from './signal-protocol-address'
export * from './key-helper'
export * from './fingerprint-generator'
export * from './session-builder'
export * from './session-cipher'
export * from './session-types'
export * from './curve'

export { setWebCrypto, setCurve } from './internal'

// returns a promise of something with the shape of the old libsignal
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async () => {
    const cw = await Curve25519Wrapper.create()

    return {
        Curve: new Curve(new Internal.Curve(cw)),
    }
}
