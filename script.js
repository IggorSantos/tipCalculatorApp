document.getElementById('gorjeta').addEventListener("keypress",inserirGorgetaKeydown);
document.getElementById('resetar').addEventListener("click",resetar);

function inserirGorjeta(num){
  let conta = parseFloat(document.getElementById('conta').value);
  let pessoas = Number(document.getElementById('pessoas').value);
  if(pessoas == 0){
    let erro = document.getElementById('erro')
    erro.innerHTML = ("Não pode ser zero")
    erro.style.color = 'red';
  }else{
    let valorGorjeta = conta * (num/100)
    conta += valorGorjeta;
    let valorPessoa = conta / pessoas;
    let gorjetaPessoa = valorGorjeta / pessoas;
    let resConta = document.getElementById('resConta')
    let resGorjeta = document.getElementById('resGorjeta')
    resConta.innerHTML = ('R$ ' + valorPessoa.toFixed(2));
    resGorjeta.innerHTML = ('R$ '+ gorjetaPessoa.toFixed(2));
  }

}

function inserirGorgetaKeydown(){
  if(event.key === "Enter"){
      let num = Number(document.getElementById('gorjeta').value);
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
  }

function resetar(){
  document.getElementById('conta').value = '';
  document.getElementById('pessoas').value = '';
  document.getElementById('gorjeta').value = '';
  let resConta = document.getElementById('resConta')
  let resGorjeta = document.getElementById('resGorjeta')
  resConta.innerHTML = "R$ 0,00"
  resGorjeta.innerHTML = "R$ 0,00"
}
