import { todos as initialState } from "../../fixtures/demoTodos";
import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { act } from "@testing-library/react";


describe("TodoApp", () => {
  test("Debe mostrar el componente", () => {
    const wrapper = shallow(<TodoApp />);    
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe agregar un todo", () => {
    Storage.prototype.setItem = jest.fn(()=>{});

    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(initialState[0]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("Todo APP (1)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });
});
