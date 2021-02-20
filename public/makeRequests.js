
function anyFunction(){
    setInterval(function(){
        axios.get('https://rickandmortyapi.com/api/character/21').then(function(res){
            return res.json()
        }).then(function(res){
            console.log(res);
        })
    },1000)
}