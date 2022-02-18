import "@testing-library/jest-dom";
import { getImagen } from "../../base-pruebas/11-async-await";

describe("11-async-await", () => {
  test("Should return an image", async () => {
    const resp = await getImagen();

    expect(resp.includes("https")).toBeTruthy();
  });
});
