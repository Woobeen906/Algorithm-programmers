function solution(nums) {
  var answer = 0;

  const getPrime = (num) => {
    let numbers = new Array(num).fill(true).fill(false, 0, 2);
    for (let i = 2; i * i <= num; i++) {
      for (let j = i * i; j < num; j += i) {
        numbers[j] = false;
      }
    }
    return numbers;
  };

  const primeNumber = getPrime(3001);
  for (let a = 0; a < nums.length - 2; a++) {
    for (let b = a + 1; b < nums.length - 1; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        const sum = nums[a] + nums[b] + nums[c];
        if (primeNumber[sum]) answer++;
      }
    }
  }

  return answer;
}
