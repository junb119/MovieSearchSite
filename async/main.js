function a() {
  return new Promise((resolve) => {
    setTimeout(()=>{
      console.log('A')
      resolve()
    },1000)
  })
}
function b() {
  return new Promise((resolve) => {
    setTimeout(()=>{
      console.log('B')
      resolve()
    },1000)
  })
}
function c() {
  return new Promise((resolve) => {
    setTimeout(()=>{
      console.log('C')
      resolve()
    },1000)
  })
}
function d() {
  return new Promise((resolve) => {
    setTimeout(()=>{
      console.log('D')
      resolve()
    },1000)
  })
}
// async, await 대체
// then,catch,finally : primise 객체에서 사용
function test() {
  a()
  .then(() => b())
  .then(() => c())
  .then(() => d())
  .then(() => {
    console.log('Done')
  })
}
test()



