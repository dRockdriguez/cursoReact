import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("07-deses-arr", () => {
    test("Should return an array with string and number", () => {
        const arr = retornaArreglo();

        const [letters, numbers] = arr;

        expect('ABC').toEqual(letters);
        expect(123).toEqual(numbers);

    });
});
