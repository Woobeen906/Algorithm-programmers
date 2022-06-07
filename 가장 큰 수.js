function solution(numbers) {
  var answer = "";
  let number = numbers.map((v) => String(v));

  number.sort((a, b) => {
    return parseInt(b + a) - parseInt(a + b);
  });

  answer = number.join("");

  return answer[0] === "0" ? "0" : answer;
}
