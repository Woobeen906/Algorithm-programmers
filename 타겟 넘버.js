function solution(numbers, target) {
  var answer = 0;

  const DFS = (graph, idx) => {
    if (idx < graph.length) {
      graph[idx] *= 1;
      DFS(graph, idx + 1);
      graph[idx] *= -1;
      DFS(graph, idx + 1);
    } else {
      const sum = graph.reduce((acc, cur) => acc + cur);
      if (sum === target) answer++;
    }
  };
  DFS(numbers, 0);

  return answer;
}
