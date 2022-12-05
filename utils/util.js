


export function randomWord(randomFlag, min, max) {
    let str = ''
    let range = min
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let pos = undefined
    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min
    }
    for (let i = 0; i < range; i++) {
        pos = Math.round(Math.random() * (arr.length - 1))
        str += arr[pos]
    }
    return str
}

export const reg = {
    phone: /^1[3|4|5|6|7|8|9][0-9]{9}$/, // 手机号码验证
    pwd: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,// 6-16位数字加字母
    pay: /^\d{6}$/,  // 6位支付密码
    code: /[0-9]{6}/,
    account: /[^a-zA-Z0-9]/g,// 账号  字母数字混合
    username: /[\u4e00-\u9fa5(a-zA-Z)]{2,6}$/, // 2-6 中文
    idCard: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,//身份证号码
    email: /^^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$$/,//邮箱正则
}

/**
 * 密码
 * @param {*} s
 */
export function isPwd (s) {
    if (!s) {
        return Promise.reject('密码不能为空!')
    }
    if (!reg.pwd.test(s)) {
        return Promise.reject('请输入6-16位字母加数字!')
    }
}

/**
 * 邮箱
 * @param {*} s
 */
export function isEmail (s) {
    if (!s) {
        return Promise.reject('邮箱不能为空!')
    }
    if (!reg.email.test(s)) {
        return Promise.reject('请输入正确的邮箱格式!')
    }
}

/**
 * 用户名
 * @param {*} s
 */
export function isAccount (s) {
    if (!s) {
        return Promise.reject('用户名不能为空!')
    }
    if (!reg.username.test(s)) {
        return Promise.reject('请输入4-12位字母加数字!')
    }
}

const _console = console;
const createLog = (util) => (...args) => {
    const fun = _console[util] ? _console[util] : _console.log;
    fun.apply(void 0, args);
};

export const log = (title, version) => {
    createLog('log')(
        `%c ${title} %c V${version} `,
        'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
        'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;'
    );
}
