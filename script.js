const squareNodeList = document.querySelectorAll('.square')
const container = document.querySelector('.container')

container.addEventListener('scroll', (e) => {
  const currentScrollValue = e.target.scrollTop
  console.log("Current scroll", currentScrollValue)
  applyRotationToAllSquares(currentScrollValue)
})

function scrollToDeg(currentScrollValue) {
  return (currentScrollValue * 360) / container.scrollTopMax
}

function scrollToScale(currentScrollValue) {
  function addZerosToLeft(number) {
    if (number < 10) return `1.000${number}`
    if (number < 100) return `1.00${number}`
    if (number < 1000) return `1.0${number}`
    if (number < 10000) return `1.${number}`
    if (number === 10000) return `2`
  }

  const scaleDecimals = Math.round((currentScrollValue * 10000) / container.scrollTopMax)

  return addZerosToLeft(scaleDecimals)
}

function applyRotationToAllSquares(currentScrollValue) {
  const rotationDeg = scrollToDeg(currentScrollValue)
  const scaleValue = scrollToScale(currentScrollValue)
  console.log(scaleValue)
  squareNodeList.forEach(squareNode => {
    squareNode.style.transform = `rotate(${rotationDeg}deg) scale(${scaleValue})`
  })
}



