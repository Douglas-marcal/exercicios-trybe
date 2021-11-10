let n = 5;
let count = n

for (let i = 0; i < n; i += 1) {
  count -= 1
  if (i % 2 === 1) {
    console.log(' ')
    continue
  }
  switch (i) {
    case 0:
      console.log(' '.repeat(count/2) + '*');
      break;
    case 2:
      console.log(' '.repeat(count/2) + '*'.repeat(i + 1));
      break;
    case 4:
      console.log(' '.repeat(count/2) + '*'.repeat(n))
      break;
    default:
      console.log('Acabou')
      break;
  }
}