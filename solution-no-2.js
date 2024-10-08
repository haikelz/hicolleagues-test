function solution2(num) {
  // variable string yang akan direturn
  let tempStr = ``;

  // loop secara naik dari 1 sampai parameter num
  for (let i = 1; i <= num; i++) {
    // inisialisasi variable string penampung per baris
    let newStr = ``;

    // loop dari 1 sampai parameter num
    for (let j = 1; j <= num; j++) {
      // hanya memasukkan nilai string ke dalam newStr jika nilai j <= i
      if (j <= i) {
        if (j % 2 === 0) {
          // masukkan string "+" jika j adalah bilangan genap
          newStr += "+";
        } else {
          // jika tidak, maka masukkan value dari j
          newStr += j;
        }
      }
    }

    // format string per baris
    tempStr += `${newStr}\n`;
  }

  return tempStr;
}

console.log(solution2(5));
