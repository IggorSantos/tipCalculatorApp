//Pegar o valor customizado e resetar os valores quando clicar em resetar
function inserirGorjeta(num){
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
