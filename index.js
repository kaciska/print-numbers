// For Loop
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('CracklePop')
  } else if (i % 5 === 0) {
    console.log('Pop')
  } else if (i % 3 === 0) {
    console.log('Crackle')
  } else {
    console.log(i)
  }
}

// For Loop with ternary operator
for (let x = 1; x <= 100; x++) {
  x % 3 === 0 && x % 5 === 0
    ? console.log('CracklePop')
    : x % 5 === 0
    ? console.log('Pop')
    : x % 3 === 0
    ? console.log('Crackle')
    : console.log(x)
}
