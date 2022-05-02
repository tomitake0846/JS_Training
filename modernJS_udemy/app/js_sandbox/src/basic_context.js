// variable declare test

const user = {
  name: 'test',
  age: 20
}
user.address = 'desert'

console.log(user)


let message = `name: ${user.name}`

console.log(message);

//arrow functions test

const func = (name) => {
  return `hello ${name}`
}

const func2  = (arg1,arg2) => arg1 + arg2;

console.log(func('sample'))

console.log(func2(1,2))

//
const {name,age} = user
console.log(`name: ${name}, age: ${age}`)

// spread context
const ary1 = [1,2,3,4]
const ary2 = [5,6,7,8]
console.log(...ary1)

console.log(func2(...ary1))
console.log(func2(...[2,3,4]))

const [num1,num2,...ary3] = ary1
console.log(num1)
console.log(ary3)

 //aaray deep copy?
const cp_ary1 = [...ary1]
console.log(ary1)
console.log(cp_ary1)

cp_ary1[0] = 100
console.log(ary1)
console.log(cp_ary1)

const join_ary = [...ary1,...ary2]
console.log(join_ary)
