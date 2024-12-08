// Referencia os elementos do HTML
const texto = document.getElementById("texto"); // Campo de texto onde o usuário digita a mensagem original
const textoCifrado = document.getElementById("cifrado"); // Campo de texto onde será exibido o resultado
const botaoCodificar = document.getElementById("codificar"); // Botão para codificar o texto
const botaoDescodificar = document.getElementById("descodificar"); // Botão para decodificar o texto

// Função para codificar o texto
function codificar() {
  const textoOriginal = texto.value; // Obtém o texto digitado pelo usuário
  textoCifrado.value = textoOriginal.split('').map(c => { // Divide o texto em caracteres e mapeia cada um
    let isMaiuscula = c === c.toUpperCase(); // Verifica se o caractere é maiúsculo
    let codigoCaractere = c.toLowerCase().charCodeAt(0); // Obtém o código ASCII do caractere em minúsculo

    // Verifica se o caractere está dentro do alfabeto
    if (codigoCaractere >= 97 && codigoCaractere <= 122) {
      const deslocamentoFixo = 3; // Define o deslocamento fixo de 3 posições
      codigoCaractere = (codigoCaractere - 97 + deslocamentoFixo) % 26 + 97; // Aplica o deslocamento dentro do alfabeto
    }

    let caractereCifrado = String.fromCharCode(codigoCaractere); // Converte o código ASCII de volta para caractere
    return isMaiuscula ? caractereCifrado.toUpperCase() : caractereCifrado; // Retorna o caractere na mesma capitalização
  }).join(''); // Junta os caracteres novamente em uma string
}

// Função para decodificar o texto
function descodificar() {
  const textoOriginal = texto.value; // Obtém o texto digitado pelo usuário
  textoCifrado.value = textoOriginal.split('').map(c => { // Divide o texto em caracteres e mapeia cada um
    let isMaiuscula = c === c.toUpperCase(); // Verifica se o caractere é maiúsculo
    let codigoCaractere = c.toLowerCase().charCodeAt(0); // Obtém o código ASCII do caractere em minúsculo

    // Verifica se o caractere está dentro do alfabeto
    if (codigoCaractere >= 97 && codigoCaractere <= 122) {
      const deslocamentoFixo = 3; // Define o deslocamento fixo de 3 posições
      codigoCaractere = (codigoCaractere - 97 - deslocamentoFixo + 26) % 26 + 97; // Reverte o deslocamento
    }

    let caractereDescifrado = String.fromCharCode(codigoCaractere); // Converte o código ASCII de volta para caractere
    return isMaiuscula ? caractereDescifrado.toUpperCase() : caractereDescifrado; // Retorna o caractere na mesma capitalização
  }).join(''); // Junta os caracteres novamente em uma string
}

// Adiciona eventos de clique aos botões
botaoCodificar.addEventListener("click", codificar); // Chama a função codificar ao clicar no botão "Codificar"
botaoDescodificar.addEventListener("click", descodificar); // Chama a função descodificar ao clicar no botão "Descodificar"