function calcular(){
  var n1 = document.getElementById("nota1")
  var nota1 = Number(n1.value)
  var n2 = document.getElementById("nota2")
  var nota2 = Number(n2.value)
  var n3 = document.getElementById("nota3")
  var nota3 = Number(n3.value)
  var n4 = document.getElementById("nota4")
  var nota4 = Number(n4.value)
  var total = nota1 + nota2 + nota3 + nota4
  var msg = document.getElementById("resp")
  var recup = nota1 + nota2 + nota3
  var falta = 24 - total
  if(total < 24 && recup >=14){
    msg.innerHTML = `Você obteve <b>${total} pontos</b>.<br> Você precisa de <b>${falta} pontos</b> na média para atingir 24.<br> Você deve tirar <b>${falta} pontos</b> na recuperação do 4ºB.`
  }else if(total < 24 && recup < 14){
    msg.innerHTML = `Você obteve <b>${total} pontos</b>.<br> Você precisa de <b>${falta} pontos</b> para atingir 24.<br> Você deve fazer a <b>prova final</b> e tirar no mínimo 6 pontos.` 
  }else{
    msg.innerHTML = "Parabéns! Você está aprovado!"
  }
}