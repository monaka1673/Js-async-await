const timerB = time => new Promise(resolve =>{
    setTimeout(()=>{
        resolve(`end:${time}`);
    },time);
});

const func = async function(){
    const res1 = await timerB(500);
    const res2 = await timerB(600);
    console.log(res1,res2)
};

func();