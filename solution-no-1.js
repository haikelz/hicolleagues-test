function solution(num) {
  let tempStr = ``;

  for (let i = num; i >= 1; i--) {
    let newStr = ``;

    for (let j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        newStr += "+";
      } else {
        newStr += j;
      }
    }

    tempStr += `${newStr}\n`;
  }

  return tempStr;
}

console.log(solution(5));
