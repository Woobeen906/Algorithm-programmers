function solution(progresses, speeds) {
  var answer = [];
  let process = progresses.map((item, index) =>
    Math.ceil((100 - item) / speeds[index])
  );
  let cnt = 1;
  let index = 0;

  for (let i = 1; i < process.length; i++) {
    if (process[index] >= process[i]) cnt++;
    else {
      answer.push(cnt);
      index += cnt;
      cnt = 1;
    }

    if (i === process.length - 1) answer.push(cnt);
  }

  return answer;
}
