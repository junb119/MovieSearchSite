function a() {
  // promise : 약속의 객체
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('A')
      resolve('Hello A') // resovle : 매개변수를 실행할 위치
    }, 1000)
  })
}
function a() {
  // promise : 약속의 객체
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('A')
      resolve('Hello A') // resovle : 매개변수를 실행할 위치
    }, 1000)
  })
}
function b() {
  // promise : 약속의 객체
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('B')
      resolve('Hello B') // resovle : 매개변수를 실행할 위치
    }, 1000)
  })
}
function c() {
  // promise : 약속의 객체
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('C')
      resolve('Hello C') // resovle : 매개변수를 실행할 위치
    }, 1000)
  })
}
function d() {
  // promise : 약속의 객체
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('D')
      resolve('Hello D') // resovle : 매개변수를 실행할 위치
    }, 1000)
  })
}

async function test(){
  const h1 = await a() // A
  const h2 = await b() // B
  const h3 = await c() // C
  const h4 = await d() // D
  console.log('Done!') // Done!
  console.log(h1,h2,h3,h4) // 'Hello A','Hello B','Hello C','Hello D',
}
test()