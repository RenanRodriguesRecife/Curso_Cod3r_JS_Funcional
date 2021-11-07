/*
function (a,b,c){
    return a + b + c
}

se você criar uma função anônima assim 
vai dar erro*/

(function (a,b, c){
    return a + b + c
})
/*você pode contornar isso coloando a função 
em parênteses ().*/

/*Function expression - atribuir um valor de uma
função em uma variável*/
//pode usar const, let e var
const sum = function (a, b){
    return a + b
}

console.log(sum(7, 59))