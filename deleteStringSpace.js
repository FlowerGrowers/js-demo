/* function deleteStringSpace(str) {
    // let firstStep = str.trim()
    let noSpaceString = ''

    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue
        }
        noSpaceString += str[i]
    }
    return noSpaceString
} */

// 法二
/* function deleteAllSpace(str) {
    return str.split(' ').join('')
} */
let test1 = ' jia    jun da  '

// 法三
function deleteAllSpace(str) {
    // return str.replace(/\s+/g, '')
    return str.replace(/\s/g, '')
}

// console.log(deleteStringSpace(test1));
console.log(deleteAllSpace(test1));
