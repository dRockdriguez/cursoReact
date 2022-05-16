import { LoginScreen } from "../../../components/login/LoginScreen";
import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("LoginScreen", () => {
  const contextValue = {
    user: {
      logged: false,
    },
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<LoginScreen />}></Route>
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("Debe mostrarse correctamente por defecto", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe lanzar el dispatch y navegación", () => {
    const handleClick = wrapper.find("button").prop("onClick");
    localStorage.setItem("lastPath", "/prueba");
    
    handleClick();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: { name: "David" },
    });

    expect(mockNavigate).toHaveBeenCalledWith("/prueba", { replace: true });

  });
});
