function solution(n, k) {
  var answer = 0;

  //k진수로 치환
  let kNumber = n.toString(k);
  let numbers = kNumber.split("0");

  const checkNumber = (number) => {
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  for (let number of numbers) {
    let check = false;
    if (number === "") continue;
    if (number * 1 === 1) continue;
    if (checkNumber(number * 1)) answer++;
  }

  return answer;
}
