function solution(s) {
  var answer = -1;

  let str = s.split("");

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      str.splice(i, 2);
      i = -1;
    }
  }
  answer = str.length === 0 ? 1 : 0;
  return answer;
}
