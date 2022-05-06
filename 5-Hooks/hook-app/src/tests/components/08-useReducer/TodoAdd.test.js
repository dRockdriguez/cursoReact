import { todos as initialState } from "../../fixtures/demoTodos";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

const handleAddTodo = jest.fn((x) => {});

describe("TodoAdd", () => {
  test("Debe mostrar el componente", () => {
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("No debe llamar al handle add todo", () => {
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({
      preventDefault() {},
    });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("Debe llamar al handle add todo", () => {
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    wrapper
      .find("input")
      .simulate("change", { target: { value: "prueba", name: "description" } });

    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({
      preventDefault() {},
    });

    expect(handleAddTodo).toHaveBeenCalled();
    expect(handleAddTodo).toHaveBeenCalledWith({
      description: "prueba",
      done: false,
      id: expect.any(Number),
    });

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
