//Palíndromo: Dada una palabra y verifica si es un palíndromo (es decir, si se lee igual de 
//adelante hacia atrás que de atrás hacia adelante).

function esPalindromo(palabra) {
    let palabraInvertida = palabra.split('').reverse().join('');
    if (palabra==palabraInvertida){
        console.log("Es palindromo");
    }else{
        console.log("No es palindromo");
    }
}

esPalindromo("espejo"); //por ejemplo oso es un palindromo