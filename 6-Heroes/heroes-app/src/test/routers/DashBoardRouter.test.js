import { DashBoardRouter } from "../../routers/DashBoardRouter";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("DashBoardRouter", () => {
  test("Debe mostrarse marvel correctamente", () => {
    const context = {
      user: {
        logged: true,
        name: "David",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/"]}>
          <DashBoardRouter></DashBoardRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("David");
    expect(wrapper.find("h1").text().trim()).toBe("Marvel");
  });

  test("Debe mostrarse dc correctamente", () => {
    const context = {
      user: {
        logged: true,
        name: "David",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/dc"]}>
          <DashBoardRouter></DashBoardRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("David");
    expect(wrapper.find("h1").text().trim()).toBe("DC");
  });
});
