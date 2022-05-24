function solution(N, stages) {
  var answer = [];
  let cnt = 0;

  for (let i = 0; i <= N; i++) answer[i] = { stage: i + 1, fail: 0, cnt: 0 };

  stages.forEach((item) => {
    answer[item - 1].cnt++;
  });
  answer.forEach((item, index) => {
    answer[index].fail = answer[index].cnt / (stages.length - cnt);
    cnt += answer[index].cnt;
  });

  answer.pop();
  answer
    .sort((a, b) => b.fail - a.fail)
    .map((item, index) => (answer[index] = item.stage));

  return answer;
}
