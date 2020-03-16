const getElementDistance = (element) => {
    const offsetTop = element.offset
    const scrollTop = document.documentElement.scrollTop
    return offsetTop - scrollTop
}

console.log(getElementDistance('#div'));
