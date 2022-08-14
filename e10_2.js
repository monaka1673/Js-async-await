new Promise(function(resolve,reject){
    setTimeout(() => {
        reject();
    }, 1000);
})
.then(function(){
    console.log('解決1');
})
.then(function(){
    console.log('解決2');
})
.catch(function(){
    console.log('catch');
});