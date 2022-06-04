function solution(w, h) {
  var answer = 1;

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  if (w === 1 || h === 1) answer = 0;
  else if (w === h) answer = w * h - w;
  else answer = w * h - (w + h - gcd(w, h));

  return answer;
}
