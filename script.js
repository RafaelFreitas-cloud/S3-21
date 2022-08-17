let nome = prompt("Entre com o nome do aluno")
let presenca = parseInt(+prompt("Qual a presença?"))
let materia1 = prompt("Digite a 1ª materia")
let nota1 = parseFloat(+prompt("Qual a nota?"))
let materia2 = prompt("Digite a 2ª materia")
let nota2 = parseFloat(+prompt("Qual a nota?"))
let materia3 = prompt("Digite a 3ª materia")
let nota3 = parseFloat(+prompt("Qual a nota?"))
let materia4 = prompt("Digite a 4ª materia")
let nota4 = parseFloat(+prompt("Qual a nota?"))
let materia5 = prompt("Digite a 5ª materia")
let nota5 = parseFloat(+prompt("Qual a nota?"))
let materia6 = prompt("Digite a 6ª materia")
let nota6 = parseFloat(+prompt("Qual a nota?"))
let materia7 = prompt("Digite a 7ª materia")
let nota7 = parseFloat(+prompt("Qual a nota?"))
let materia8 = prompt("Digite a 8ª materia")
let nota8 = parseFloat(+prompt("Qual a nota?"))
let materia9 = prompt("Digite a 9ª materia")
let nota9 = parseFloat(+prompt("Qual a nota?"))
let materia10 = prompt("Digite a 10ª materia")
let nota10 = parseFloat(+prompt("Qual a nota?"))

let mediaNotas = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10)/10

// let mediaNotas = (nota1 + nota2)/2

if (nome.length<5){
    alert("Nome inválido")
}

if (presenca<=0 || presenca>10){
    alert("Nota de presença inválida")
}

if (nota1<0 || nota1>10){
    alert("Nota(s) da(s) matéria(s) inválida(s)")
}

if (nota2<0 || nota2>10){
    alert("Nota(s) da(s) matéria(s) inválida(s)")
}

if (nota3<0 || nota3>10){
    alert("Nota(s) da(s) matéria(s) inválida(s)")
}

if (nota4<0 || nota4>10){
    alert("Nota(s) da(s) matéria(s) inválida(s)")
}

if (nota5<0 || nota5>10){
    alert("Nota(s) da(s) matéria(s) inválida(s)")
}

if (nota6<0 || nota6>10){
    alert("Nota(s) da(s) matéria(s) inválida(s)")
}

if (nota7<0 || nota7>10){
    alert("Nota(s) da(s) matéria(s) inválida(s)")
}

if (nota8<0 || nota8>10){
    alert("Nota(s) da(s) matéria(s) inválida(s)")
}

if (nota9<0 || nota9>10){
    alert("Nota(s) da(s) matéria(s) inválida(s)")
}

if (nota10<0 || nota10>10){
    alert("Nota(s) da(s) matéria(s) inválida(s)")
}

if(mediaNotas>8 && presenca>6){
    console.log(`A nota do aluno ${nome} é de ${mediaNotas} e a sua presença de ${presenca}: Aluno aprovado!`)
}else{
    console.log(`A nota do aluno ${nome} é de ${mediaNotas} e a sua presença de ${presenca}: Aluno reprovado!`)
}
