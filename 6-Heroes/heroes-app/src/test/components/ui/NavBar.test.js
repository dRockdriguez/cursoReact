import { Navbar } from "../../../components/ui/NavBar";
import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Navbar", () => {
  const contextValue = {
    user: {
      name: "David",
      logged: true,
    },
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("Debe mostrarse correctamente por defecto", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe llamar al logout, navigate y dispatch", () => {
    wrapper.find("button").prop("onClick")();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });

    expect(mockNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
