let button = document.getElementById('forLoop')
let input = document.getElementById('inputNumber')

button.addEventListener('click', () => {
  let inputValue = Number(document.getElementById('inputNumber').value) // It is neccesary to change the type of value from string

  let arr = []

  let result = document.createElement('div')
  result.classList.add('result')
  document.getElementById('container').appendChild(result)

  // For Loop
  for (let i = 1; i < inputValue + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('CracklePop')
    } else if (i % 5 === 0) {
      arr.push('Pop')
    } else if (i % 3 === 0) {
      arr.push('Crackle')
    } else {
      arr.push(i)
    }
  }
  result.innerHTML = arr.join(', ') // divide items in array wit comma and space

  button.remove() // remove button for making loop

  let clearButton = document.createElement('button') // add button for result remove
  clearButton.innerText = 'Clear'
  document.getElementById('container').appendChild(clearButton)

  input.style.display = 'none' // hide input field

  clearButton.addEventListener('click', () => {
    document.querySelector('.result').remove()
    document.getElementById('container').appendChild(button)
    clearButton.remove()
    input.style.display = 'inline'
  })
})

//Other ways for looping

// For Loop with ternary operator
/*for (let x = 1; x <= 100; x++) {
  x % 3 === 0 && x % 5 === 0
    ? console.log('CracklePop')
    : x % 5 === 0
    ? console.log('Pop')
    : x % 3 === 0
    ? console.log('Crackle')
    : console.log(x)
}

// While Loop
let y = 0
while (y < 100) {
  y++
  if (y % 3 === 0 && y % 5 === 0) {
    console.log('CracklePop')
  } else if (y % 5 === 0) {
    console.log('Pop')
  } else if (y % 3 === 0) {
    console.log('Crackle')
  } else {
    console.log(y)
  }
}

// Do...while Loop with ternary operator
let n = 0
do {
  n++
  n % 3 === 0 && n % 5 === 0
    ? console.log('CracklePop')
    : n % 5 === 0
    ? console.log('Pop')
    : n % 3 === 0
    ? console.log('Crackle')
    : console.log(n)
} while (n < 100) */
