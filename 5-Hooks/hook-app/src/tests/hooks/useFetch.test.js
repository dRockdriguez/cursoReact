import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("useFetch", () => {
  test("debe retornar el form por defecto", () => {
    const { result } = renderHook(() =>
      useFetch("https://reqres.in/api/users?page=2")
    );
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("debe retornar el resultado de la llamada", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/api/users?page=2")
    );

    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data).not.toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe(false);
  });

  test("debe manejar el error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/apiFAKE/users?page=2")
    );

    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("ERROR");
  });
});
