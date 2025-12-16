let p1 = Promise.resolve("p1")
let p2 = Promise.resolve("p2")
let p3 = Promise.reject("r3").catch(()=>{})
let p4 = Promise.reject("r4").catch(()=>{})
let p5 = Promise.resolve("r5")

Promise.all([p1, p2, p5])               //reject if any 1 also fails
       .then(res => console.log(res))
       .catch((err)=>console.log(err))

Promise.allSettled([p1,p2,p3,p4,p5])    //waits for all promise sucess or fail
       .then((res)=>console.log(res))
       .catch((err)=>console.log(err))

Promise.race([p1,p2,p3,p4,p5])          //returns 1st promise
       .then((res)=>console.log(res))
       .catch((err)=>console.log(err))

Promise.any([p1,p2,p3,p4,p5])          // return any one ,rejects if all fail
       .then((res)=>console.log(res))
       .catch((err)=>console.log(err))