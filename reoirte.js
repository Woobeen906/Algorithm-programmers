function solution(id_list, report, k) {
  const _report = new Set(report);
  let answer = Array.from({ length: id_list.length }, () => 0);

  const reporters = {};

  id_list.map((data) => (reporters[data] = []));

  _report.forEach((data) => {
    const [reporter, reported] = data.split(" ");
    if (!reporters[reported].includes(reporter))
      reporters[reported].push(reporter);
  });

  for (let item in reporters) {
    if (reporters[item].length >= k) {
      reporters[item].map((item, index) => {
        answer[id_list.indexOf(item)]++;
      });
    }
  }

  return answer;
}
