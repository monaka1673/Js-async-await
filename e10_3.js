new Promise(function(resolve,reject){
    setTimeout(function(){
        reject();
    },1000);
})
.then(
    function(){console.log('解決1')},
    function(){console.log('拒否1')}
)
.then(
    function(){console.log('解決2')},
    function(){console.log('拒否2')}
)
.catch(function(){
    console.log('catch')
});