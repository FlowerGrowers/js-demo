// 倒计时
function countdown() {
    let startTime = new Date() // 当前时间
    let stopDateTime = new Date('2021-1-1') // 结束时间



    let subTime = (stopDateTime.getTime() - startTime.getTime()) / 1000

    let oDay = parseInt(subTime / (24 * 60 * 60))

    let oHour = parseInt(subTime / (60 * 60) % 24)

    let oMinutes = parseInt(subTime / 60 % 60)

    let oSeconds = parseInt(subTime % 60)

    let keep = `${p(oDay)}:${p(oHour)}:${p(oMinutes)}:${p(oSeconds)}`

    return keep
}
function p(time) {
    return time = time < 10 ? '0' + time : time
}
console.log(countdown());
