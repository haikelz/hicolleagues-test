function solution(num) {
  let tempStr = ``;

  for (let i = 1; i <= num; i++) {
    let newStr = ``;

    for (let j = 1; j <= num; j++) {
      if (j <= i) {
        if (j % 2 === 0) {
          newStr += "+";
        } else {
          newStr += j;
        }
      }
    }

    tempStr += `${newStr}\n`;
  }

  return tempStr;
}

console.log(solution(5));
