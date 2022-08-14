const timerC = time => new Promise(resolve => {
    setTimeout(() => {
        console.log(`exec: ${time}`);
        resolve(`resolve: ${time}`);
    }, time);
});

const arr = [700, 600, 500];

// const func = async function(){
//     await arr.forEach(
//         e=>timerC(e)
//     );
//     console.log('end all');
// }

// func();

(async function(){
    const res = [];
    for (let i = 0;i<arr.length;i++){
        res.push(await timerC(arr[i]));
    }
    console.log('end all',res);
})();