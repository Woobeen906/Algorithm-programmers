function solution(n, lost, reserve) {
  lost = lost.sort();
  reserve = reserve.sort();
  let temp = lost;

  lost = lost.filter((v) => {
    return !reserve.includes(v);
  });
  reserve = reserve.filter((v) => {
    return !temp.includes(v);
  });

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (Math.abs(lost[i] - reserve[j]) === 1) {
        let lostIndex = lost.indexOf(lost[i]);
        let reserveIndex = reserve.indexOf(reserve[j]);
        if (lostIndex > -1) {
          lost.splice(lostIndex, 1);
          reserve.splice(reserveIndex, 1);
          i--;
          j--;
        }
        break;
      }
    }
  }

  return n - lost.length;
}
