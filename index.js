function somatorioDivisiveis3ou5(numero) {
    if (numero <= 0 || !Number.isInteger(numero)) {
      return "Por favor, forneça um número inteiro positivo.";
    }
  
    let soma = 0;
  
    for (let i = 0; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }
  
    return soma;
  }
  const resultado = somatorioDivisiveis3ou5(10);
  console.log(resultado);