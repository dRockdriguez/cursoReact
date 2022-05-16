import { HeroeScreen } from "../../../components/heroes/HeroeScreen";
import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("HeroeScreen", () => {
  test("No debe mostrarse si no hay heroe en la url", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/heroe"]}>
        <Routes>
          <Route path="/" element={<h1>No Heroe page</h1>}></Route>
          <Route path="/heroe" element={<HeroeScreen />}></Route>
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find("h1").text().trim()).toBe("No Heroe page");
  });

  test("Debe mostrar el heroe si se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/heroe/marvel-spider"]}>
        <Routes>
          <Route path="/" element={<h1>No Heroe page</h1>}></Route>
          <Route path="/heroe/:id" element={<HeroeScreen />}></Route>
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find(".row").exists()).toBe(true);
  });

});
