// 字符串全为中文时
function isChinese(str) {
    return /^[\u4e00-\u9fa5]+$/.test(str)
}
console.log(isChinese('我阿s尼'));
