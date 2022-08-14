new Promise(function(resolve, reject){
    setTimeout(function(){
        reject();
    },1000);
})
.then(
    function(){
        console.log('解決');
    },
    function(){
        console.log('拒否');
    }
);