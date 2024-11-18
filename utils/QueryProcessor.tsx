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
    const match = query.match(/Which of the following numbers is the largest: (.+?)\?/);
    const numbersString = match ? match[1] : "";
    
    const numbers = numbersString.split(",").map(num => parseInt(num.trim(), 10));
    
    const largestNumber = Math.max(...numbers);
    
    return largestNumber.toString();
  }

  if (/What is (\d+) plus (\d+)\?/.test(query)) {
    const match = query.match(/What is (\d+) plus (\d+)\?/);
    if (match) {
      const [, num1, num2] = match;
      
      const sum = parseInt(num1, 10) + parseInt(num2, 10);
      
      return sum.toString();
    }
  }

  if (/What is (\d+) multiplied by (\d+)\?/.test(query)) {
    const match = query.match(/What is (\d+) multiplied by (\d+)\?/);
    if (match) {
      const [, num1, num2] = match;
      
      const product = parseInt(num1, 10) * parseInt(num2, 10);
      
      return product.toString();
    }
  }

  if (/Which of the following numbers is both a square and a cube: (.+?)\?/.test(query)) {
    const match = query.match(/Which of the following numbers is both a square and a cube: (.+?)\?/);
    const numbersString = match ? match[1] : "";
    const numbers = numbersString.split(",").map(num => parseInt(num.trim(), 10));
  
    const isSquareAndCube = (num: number) => {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num); 
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
    };
  
    const results = numbers.filter(isSquareAndCube);
    
    return results.length > 0 ? results.join(", ") : "No numbers found";
  }
  

  if (/What is (\d+) minus (\d+)\?/.test(query)) {
    const match = query.match(/What is (\d+) minus (\d+)\?/);
    if (match) {
      const [, num1, num2] = match;
      
      const minus = parseInt(num1, 10) - parseInt(num2, 10);
      
      return minus.toString(); 
    }
  }

  if (/Which of the following numbers are primes: (.+?)\?/.test(query)) {
    const match = query.match(/Which of the following numbers are primes: (.+?)\?/);
    const numbersString = match ? match[1] : "";
    const numbers = numbersString.split(",").map(num => parseInt(num.trim(), 10));
  
    const isPrime = (num: number) => {
      if (num <= 1) return false; 
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
      }
      return true;
    };
  
    const primes = numbers.filter(isPrime);
  
    return primes.length > 0 ? primes.join(", ") : "No prime numbers found";
  }

  return "";
}
