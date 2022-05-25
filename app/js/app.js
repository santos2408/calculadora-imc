const form = document.querySelector('[data-form="form"]')
const inputWeight = document.querySelector('#peso')
const inputHeight = document.querySelector('#altura')
const imcResult = document.querySelector('[data-imc="imc"')
const imcInfo = document.querySelector('[data-info="info"')

const calculateIMC = (weight, height) => {
  return (weight / (height ** 2)).toFixed(1)
}

const showResultIMC = (totalIMC, message) => {
  imcResult.textContent = `IMC: ${totalIMC}`
  imcInfo.textContent = `${message}`
}

const getCategoryIMC = totalIMC => {
  const category = {
    underWeight: totalIMC < 18.5,
    idealWeight: totalIMC >= 18.5 && totalIMC <= 24.9,
    overWeight: totalIMC >= 25.0
  }

  if (category.underWeight) showResultIMC(totalIMC, `Você está abaixo do peso`)
  if (category.idealWeight) showResultIMC(totalIMC, `Você está no peso ideal`)
  if (category.overWeight) showResultIMC(totalIMC, `Você está acima do peso`)
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const weight = (inputWeight.value).replace(',', '.')
  const height = (inputHeight.value).replace(',', '.')

  const totalIMC = calculateIMC(weight, height)
  getCategoryIMC(totalIMC)
})