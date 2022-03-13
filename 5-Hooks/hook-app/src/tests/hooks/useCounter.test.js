import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("UseCounter", () => {
  test("Debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter(1));

    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");

  });


  test("Debe tener el valor 100", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });


  test("Debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));

    const { increment } = result.current;

    act(() => {
        increment();
    })

    const { counter } = result.current;

    expect(counter).toBe(101);
  });

  test("Debe decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));

    const { decrement } = result.current;

    act(() => {
        decrement();
    })

    const { counter } = result.current;
    
    expect(counter).toBe(99);
  });


  test("Debe resetear el contador", () => {
    const { result } = renderHook(() => useCounter(100));

    const { decrement, reset } = result.current;

    act(() => {
        decrement();
        reset();
    })

    const { counter } = result.current;
    
    expect(counter).toBe(100);
  });

});
