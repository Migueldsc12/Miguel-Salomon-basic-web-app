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

  if (/What is (\d+) multiplied by (\d+)\?/.test(query)) {
    // Extraemos los dos números de la pregunta usando la expresión regular
    const match = query.match(/What is (\d+) multiplied by (\d+)\?/);
    if (match) {
      const [, num1, num2] = match;
      
      // Convertimos los números extraídos a enteros y calculamos la multiplicación
      const product = parseInt(num1, 10) * parseInt(num2, 10);
      
      return product.toString(); // Retornamos el resultado como una cadena
    }
  }

  if (/Which of the following numbers is both a square and a cube: (.+?)\?/.test(query)) {
    // Extraemos los números de la pregunta
    const match = query.match(/Which of the following numbers is both a square and a cube: (.+?)\?/);
    const numbersString = match ? match[1] : "";
    const numbers = numbersString.split(",").map(num => parseInt(num.trim(), 10));
  
    // Verificamos si es cuadrado perfecto y cubo perfecto
    const isSquareAndCube = (num: number) => {
      const sqrt = Math.sqrt(num); // Raíz cuadrada
      const cbrt = Math.cbrt(num); // Raíz cúbica
      return Number.isInteger(sqrt) && Number.isInteger(cbrt); // Ambas deben ser enteras
    };
  
    // Filtramos los números que cumplen la condición
    const results = numbers.filter(isSquareAndCube);
    
    // Retornamos los resultados separados por comas
    return results.length > 0 ? results.join(", ") : "No numbers found";
  }
  

  if (/What is (\d+) minus (\d+)\?/.test(query)) {
    // Extraemos los dos números de la pregunta usando la expresión regular
    const match = query.match(/What is (\d+) minus (\d+)\?/);
    if (match) {
      const [, num1, num2] = match;
      
      // Convertimos los números extraídos a enteros y calculamos la suma
      const minus = parseInt(num1, 10) - parseInt(num2, 10);
      
      return minus.toString(); // Retornamos el resultado como una cadena
    }
  }

  if (/Which of the following numbers are primes: (.+?)\?/.test(query)) {
    // Extraemos los números de la pregunta
    const match = query.match(/Which of the following numbers are primes: (.+?)\?/);
    const numbersString = match ? match[1] : "";
    const numbers = numbersString.split(",").map(num => parseInt(num.trim(), 10));
  
    // Función para verificar si un número es primo
    const isPrime = (num: number) => {
      if (num <= 1) return false; // Los números menores o iguales a 1 no son primos
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si es divisible por algún número menor a su raíz cuadrada
      }
      return true;
    };
  
    // Filtramos los números primos
    const primes = numbers.filter(isPrime);
  
    // Retornamos los números primos separados por comas
    return primes.length > 0 ? primes.join(", ") : "No prime numbers found";
  }
  
  
  
  
  
  
  
  

  return "";
}
