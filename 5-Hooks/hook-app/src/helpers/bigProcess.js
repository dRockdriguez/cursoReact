export const bigProcess = (iterations) => {
    for (let i = 0; i < iterations; i++) {
      console.log("Processing..");
    }

    return `${iterations} iteraciones realizadas.`;
  };