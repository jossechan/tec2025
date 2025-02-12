function esPalindromo(texto) {
    // Normalizar el texto: quitar acentos, espacios y signos de puntuación
    texto = texto.toLowerCase()
                 .normalize("NFD").replace(/[̀-ͯ]/g, "") // Elimina tildes
                 .replace(/[^a-z0-9]/g, ""); // Elimina espacios y signos de puntuación

    // Verificar si es igual al texto invertido
    let textoInvertido = texto.split('').reverse().join('');
    return texto === textoInvertido;
}

// Ejemplos de uso
console.log(esPalindromo("Anilina")); // true
console.log(esPalindromo("Oso")); // true
console.log(esPalindromo("A mamá Roma le aviva el amor a mamá")); // true
console.log(esPalindromo("Hola mundo")); // false
