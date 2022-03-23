

function outer(){
    let a = "string"
    let b = {name: "object"}
    function inner(a, b){
        console.log(a)
        console.log(b)
        a = "newString";
        b = {name:"newObject"};
        console.log(a)
        console.log(b)
        b ={name:"superNewObject"}
        
    }
    inner(a, b)
    console.log(a)
    console.log(b)
}
outer()