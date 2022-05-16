import { PrivateRoute } from "../../routers/PrivateRoute";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Navigate: () => <h1>Login</h1>
}));

describe("PrivateRoute", () => {
  test("Debe mostrarse el componente si está auntenticado y guardar en localstorage", () => {
    Storage.prototype.setItem = jest.fn();

    const context = {
      user: {
        logged: true,
        name: "David",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
              <h1>Private</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Private");
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "//");
  });

  test("Debe ir al login si no está autenticado", () => {
    Storage.prototype.setItem = jest.fn();

    const context = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
              <h1>Private</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper.find("h1").text().trim()).toBe("Login");
  });
});
