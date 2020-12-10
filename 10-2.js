const input = 
`16
10
15
5
1
11
7
19
6
12
4`.split("\n").map(item => {
  return Number(item);
})

const adapters = input.sort(function (a, b) {
  return a-b
})
adapters.unshift(0);
adapters.push(adapters[adapters.length-1]+3)
console.log(adapters);

ways = {}


for (let i = 0; i < adapters.length; i++){
  for (let j = i; j < adapters.length; j++){
    let sum = (adapters[i] - adapters[j]) 
    let diff = Math.abs(sum)
    if (sum !== 0 && diff <= 3 ) {
      if (ways[adapters[i]]) {
        ways[adapters[i]] += 1
      } else {
        ways[adapters[i]] = 1
      }
    }
  }
}
console.log(ways);