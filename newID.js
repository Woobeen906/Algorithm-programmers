function solution(new_id) {
  var answer = "";
  new_id = new_id.toLowerCase();
  for (let i = 0; i < new_id.length; i++) {
    let checkString = /[a-z]/;
    if (!isNaN(Number(new_id[i]))) continue;
    else if (
      checkString.test(new_id[i]) ||
      new_id[i] === "-" ||
      new_id[i] === "_" ||
      new_id[i] === "."
    ) {
      continue;
    } else {
      new_id = new_id.replace(new_id[i], "");
      i--;
    }
  }
  let length = new_id.length;
  for (let i = 0; i < length; i++) {
    new_id = new_id.replace("..", ".");
  }
  while (new_id[0] === ".") new_id = new_id.substr(1, new_id.length);
  while (new_id[new_id.length - 1] === ".")
    new_id = new_id.substr(0, new_id.length - 1);

  if (new_id.length === 0) new_id = "a";
  if (new_id.length >= 16) new_id = new_id.substr(0, 15);

  while (new_id[new_id.length - 1] === ".")
    new_id = new_id.substr(0, new_id.length - 1);

  if (new_id.length <= 2) {
    while (new_id.length < 3) {
      new_id = new_id + new_id[new_id.length - 1];
    }
  }
  answer = new_id;
  return answer;
}
