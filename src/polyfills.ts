// Polyfill for TextDecoder to work in React Native
class TextDecoderPolyfill {
    decode(input?: ArrayBuffer | DataView): string {
        if (!input) return ''
        let arr: Uint8Array
        if (input instanceof DataView) {
            arr = new Uint8Array(input.buffer)
        } else {
            arr = new Uint8Array(input)
        }
        let str = ''
        for (let i = 0; i < arr.length; i++) {
            str += String.fromCharCode(arr[i])
        }
        return str
    }
}

// @ts-expect-error - TextDecoder is not defined in React Native
global.TextDecoder = TextDecoderPolyfill
