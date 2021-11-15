let n = 5;

for (let i = 1; i <= n; i += 1) {
  switch (i) {
  case 1:
    console.log(' '.repeat(n - i) + '*');
    break;
  case 2:
    console.log(' '.repeat(n - i) + '*'.repeat(i));
    break;
  case 3:
    console.log(' '.repeat(n - i) + '*'.repeat(i));
    break;
  case 4:
    console.log(' '.repeat(n - i) + '*'.repeat(i));
    break;
  case 5:
    console.log(' '.repeat(n - i) + '*'.repeat(i));
    break;
  default:
    console.log('Houve algum erro.')
  }
}