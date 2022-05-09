import { SearchScreen } from "../../../components/search/SearchScreen";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

describe("SearchScreen", () => {
  test("Debe mostrarse correctamente por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/serch"]}>
        <SearchScreen></SearchScreen>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe("Aún no hay resultados");
  });
});
