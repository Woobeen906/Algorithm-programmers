function solution(priorities, location) {
  var answer = 0;
  let cnt = 0;
  while (priorities.length > 0) {
    let check = priorities.shift();
    if (priorities.filter((v) => v > check).length > 0) {
      priorities.push(check);
    } else {
      cnt++;
      if (location === 0) {
        answer = cnt;
        break;
      }
    }
    location--;
    if (location === -1) location = priorities.length - 1;
  }

  return answer;
}
