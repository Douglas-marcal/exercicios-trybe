let n = 7
let count = n

for (let i = 0; i < n; i += 1) {
  
  switch (i) {
    case 0:
      console.log(' '.repeat(count/2) + '*')
      break;
    case 1:
      console.log(' '.repeat(count/2) + '*')
      break;
    case 2:
      console.log(' '.repeat(count/2) + '*')
      break;
  }
  count -= 2
}