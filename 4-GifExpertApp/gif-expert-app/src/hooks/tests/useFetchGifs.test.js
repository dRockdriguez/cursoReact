import { useFetchGifs } from "../useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("UseFetchGifs", () => {
  test("Should return the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("pikachu"));

    const { data, loading } = result.current;
    await waitForNextUpdate({timeout:3500});

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("Should return the correct state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("pikachu"));

    await waitForNextUpdate({timeout:3500});
    const { data, loading } = result.current;

    expect(data).not.toEqual([]);
    expect(loading).toBeFalsy();
  });
});
