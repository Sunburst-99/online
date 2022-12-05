import CryptoJS from 'crypto-js'

export function aesMinEncrypt(key, iv, word){
    var _word = CryptoJS.enc.Utf8.parse(word),
            _key = CryptoJS.enc.Utf8.parse(key),
            _iv = CryptoJS.enc.Utf8.parse(iv);
    var encrypted = CryptoJS.AES.encrypt(_word, _key, {
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}