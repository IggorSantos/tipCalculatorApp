//Pegar o valor customizado e resetar os valores quando clicar em resetar
document.getElementById('gorjeta').addEventListener("keypress",inserirGorgetakeydown);
document.getElementById('resetar').addEventListener("click",resetar);

function inserirGorjeta(num){
  let conta = parseFloat(document.getElementById('conta').value);
  let pessoas = Number(document.getElementById('pessoas').value);
  let valorGorjeta = conta * (num/100)
  conta += valorGorjeta;
  let valorPessoa = conta / pessoas;
  let gorjetaPessoa = valorGorjeta / pessoas;
  let resConta = document.getElementById('resConta')
  let resGorjeta = document.getElementById('resGorjeta')
  resConta.innerHTML = valorPessoa.toFixed(2);
  resGorjeta.innerHTML = gorjetaPessoa.toFixed(2);
}

function inserirGorgetakeydown(){
  if(event.key === "Enter"){
    let num = Number(document.getElementById('gorjeta').value);
    let conta = Number(document.getElementById('conta').value);
    let pessoas = Number(document.getElementById('pessoas').value);
    let valorGorjeta = conta * (num/100)
    conta += valorGorjeta;
    let valorPessoa = conta / pessoas;
    let gorjetaPessoa = valorGorjeta / pessoas;
    let resConta = document.getElementById('resConta')
    let resGorjeta = document.getElementById('resGorjeta')
    resConta.innerHTML = valorPessoa.toFixed(2);
    resGorjeta.innerHTML = gorjetaPessoa.toFixed(2);
  }
}

function resetar(){
  document.getElementById('conta').value = '';
  document.getElementById('pessoas').value = '';
  document.getElementById('gorjeta').value = '';
  console.log("Funcionou")
}
