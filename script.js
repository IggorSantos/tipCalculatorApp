//Primeiro coisa é pegar o total da conta que o usuario digitou e somar com a gorjeta
function inserirGorjeta(num){
  let conta = Number(document.getElementById('conta').value);
  let pessoas = Number(document.getElementById('pessoas').value);
  conta += conta * (num/100)
  let res = document.getElementById('resGorjeta')
  res.innerHTML = conta;

}
