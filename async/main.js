function a(number) {
  return new Promise((resolve, reject) => {
    if (number > 4){
      reject()
      return
    }
    setTimeout(()=>{
      console.log('A')
      resolve()
    },1000)
  })
}
// async, await 대체
// then,catch,finally : primise 객체에서 사용
async function test() {
  
  // a(7)
  //   .then(() => {
  //     console.log('Resolve!')
  //   })
  //   .catch(() => {
  //     console.log('Reject!')
  //   })
  //   .finally(() =>{
  //     console.log('Done!')
  //   })


  try {
    await a(7)
    console.log('Resolve!')
  
  } catch (error) {
    console.log('Reject!')
  } finally {
    console.log('Done!')
  }

}
test()



