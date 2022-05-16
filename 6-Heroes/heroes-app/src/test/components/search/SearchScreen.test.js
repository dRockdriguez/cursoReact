import { SearchScreen } from "../../../components/search/SearchScreen";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("SearchScreen", () => {
  test("Debe mostrarse correctamente por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/serch"]}>
        <SearchScreen></SearchScreen>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe(
      "Aún no hay resultados"
    );
  });

  test("Debemostrar a batman", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/serch?q=batman"]}>
        <SearchScreen></SearchScreen>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("input").prop("value")).toBe("batman");
  });

  test("Debemostrar que no hay resultados para q", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/serch?q=123"]}>
        <SearchScreen></SearchScreen>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe(
      "No hay resultados para 123"
    );
  });

  test("Debe llamar al navigate", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/serch"]}>
        <SearchScreen></SearchScreen>
      </MemoryRouter>
    );

    wrapper.find("input").simulate("change", {
      target: {
        name: "searchText",
        value: "batman",
      },
    });

    wrapper.find("form").prop("onSubmit")({
      preventDefault: () => {},
    });

    expect(mockNavigate).toHaveBeenCalledWith(`?q=batman`);
  });
});
