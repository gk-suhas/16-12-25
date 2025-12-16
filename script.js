let p1 = Promise.resolve("p1")
let p2 = Promise.resolve("p2")
let p3 = Promise.reject("r3").catch(()=>{})
let p4 = Promise.reject("r4").catch(()=>{})
let p5 = Promise.resolve("r5")

Promise.all([p1, p2, p5])               //Resolves when all promises resolve
       .then(res => console.log(res))   //Rejects if any promise fails
       .catch((err)=>console.log(err))

Promise.allSettled([p1,p2,p3,p4,p5])    //Waits for all promises (success or failure)
       .then((res)=>console.log(res))
       .catch((err)=>console.log(err))

Promise.race([p1,p2,p3,p4,p5])          //Returns result of the first promise to settle
       .then((res)=>console.log(res))
       .catch((err)=>console.log(err))

Promise.any([p1,p2,p3,p4,p5])          // Resolves when any one promise resolves
       .then((res)=>console.log(res))  //Rejects only if all fail
       .catch((err)=>console.log(err))