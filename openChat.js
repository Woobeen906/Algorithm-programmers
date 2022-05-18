function solution(record) {
  var answer = [];
  let idList = {};

  record.map((item) => {
    const [state, uid, name] = item.split(" ");
    if (state !== "Leave") {
      idList[uid] = [];
      idList[uid].push(name);
    }
  });

  record.map((item) => {
    const [state, uid, name] = item.split(" ");

    if (state === "Enter") {
      answer.push(`${idList[uid][0]}님이 들어왔습니다.`);
    }
    if (state === "Leave") {
      answer.push(`${idList[uid][0]}님이 나갔습니다.`);
    }
  });

  return answer;
}
