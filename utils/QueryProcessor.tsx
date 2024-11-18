export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "1910274" );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "Miguel" );
  }

  if (/Which of the following numbers is the largest: (.+?)\?/.test(query)) {
    // Extraemos los números de la consulta utilizando una expresión regular
    const match = query.match(/Which of the following numbers is the largest: (.+?)\?/);
    const numbersString = match ? match[1] : "";
    
    // Convertimos la cadena de números en un array de números
    const numbers = numbersString.split(",").map(num => parseInt(num.trim(), 10));
    
    // Encontramos el número más grande
    const largestNumber = Math.max(...numbers);
    
    return largestNumber.toString(); // Retornamos el número más grande como una cadena
  }

  if (/What is (\d+) plus (\d+)\?/.test(query)) {
    // Extraemos los dos números de la pregunta usando la expresión regular
    const match = query.match(/What is (\d+) plus (\d+)\?/);
    if (match) {
      const [, num1, num2] = match;
      
      // Convertimos los números extraídos a enteros y calculamos la suma
      const sum = parseInt(num1, 10) + parseInt(num2, 10);
      
      return sum.toString(); // Retornamos el resultado como una cadena
    }
  }
  
  

  return "";
}
