function solution(s) {
  var answer = -1;

  let str = [];

  for (let i = 0; i < s.length; i++) {
    if (!str.length || str[str.length - 1] !== s[i]) str.push(s[i]);
    else str.pop();
  }

  return str.length === 0 ? 1 : 0;
}
