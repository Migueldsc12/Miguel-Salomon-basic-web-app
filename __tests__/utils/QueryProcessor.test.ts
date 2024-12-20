import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"1910274"
    	));
    });

    test('should return my name', () => {
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"Miguel"
    	));
    });

    test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 30, 92, 43?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"92"
    	));
    });

    test('should return sum of numbers', () => {
        const query = "What is 99 plus 55?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"154"
    	));
    });

    test('should return mult of numbers', () => {
        const query = "What is 56 multiplied by 4?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"224"
    	));
    });

    test('should return sqare', () => {
        const query = "Which of the following numbers is both a square and a cube: 2397, 3481, 2500, 4690, 1367, 64, 216?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"64"
    	));
    });

    test('should return minus of numbers', () => {
        const query = "What is 26 minus 2?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"24"
    	));
    });

    test('should return minus of numbers', () => {
        const query = "Which of the following numbers are primes: 81, 73, 96, 67, 66?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"73, 67"
    	));
    });

   
});
