import { AppRouter } from "../../routers/AppRouter";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";

describe("AppRouter", () => {
  test("Si no está autenticado debe renderizar el login", () => {
    const context = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <AppRouter></AppRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Login");
  });

  test("Si está autenticado debe renderizar marvel", () => {
    const context = {
      user: {
        logged: true,
        name: "David",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <AppRouter></AppRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Marvel");
  });
});
