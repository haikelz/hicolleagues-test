function solution1(num) {
  // variable string yang akan direturn
  let tempStr = ``;

  // loop secara menurun dari num sampai 1
  for (let i = num; i >= 1; i--) {
    // inisialisasi variable string penampung per baris
    let newStr = ``;

    // loop secara naik dari 1 sampai nilai i
    for (let j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        // masukkan string "+" jika i adalah bilangan genap
        newStr += "+";
      } else {
        // jika tidak, maka masukkan value dari j
        newStr += j;
      }
    }

    // format string per baris
    tempStr += `${newStr}\n`;
  }

  return tempStr;
}

console.log(solution1(5));
