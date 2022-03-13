import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("useForm", () => {
  const initialForm = {
    name: "David",
    email: "drock@usal.es",
  };

  test("debe retornar el form por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe cambiar el valor del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "David2",
        },
      });
    });

    const [values] = result.current;
    expect(values).toEqual({...initialForm, name: "David2"});
  });

  test("debe de resetear el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "David2",
        },
      });
      reset();
    });

    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
