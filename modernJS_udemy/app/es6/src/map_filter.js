const ary1 = [1,2,3,4,5]

ary1.map((num,index) => console.log(`i: ${index}, number : ${num}`))

const ary = ary1.map((num) => num * 10)

const odd_ary = ary1.filter((num) => (num % 2) === 1)

console.log(ary)
console.log(odd_ary)
