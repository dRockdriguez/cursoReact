import { todos as initialState } from "../../fixtures/demoTodos";
import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";

describe("TodoListItem", () => {
  test("Debe mostrar el componente", () => {
    const wrapper = shallow(
      <TodoListItem
        todo={initialState[0]}
        index={0}
        toggleState={() => {}}
        deleteTodo={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar llamar a la funcion borrar", () => {
    const mockDelete = jest.fn((x) => {});

    const wrapper = shallow(
      <TodoListItem
        todo={initialState[0]}
        index={0}
        toggleState={() => {}}
        deleteTodo={mockDelete}
      />
    );

    wrapper.find(".btn-danger").simulate("click");

    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test("Debe mostrar llamar a la funcion toggle", () => {
    const toggle = jest.fn((x) => {});

    const wrapper = shallow(
      <TodoListItem
        todo={initialState[0]}
        index={0}
        toggleState={toggle}
        deleteTodo={() => {}}
      />
    );

    wrapper.find("p").simulate("click");

    expect(toggle).toHaveBeenCalledWith(1);
  });

  test("Debe mostrar lel texto correctamente", () => {
    const wrapper = shallow(
      <TodoListItem
        todo={initialState[0]}
        index={0}
        toggleState={() => {}}
        deleteTodo={() => {}}
      />
    );
    expect(wrapper.find("p").text().trim()).toEqual(
      `1. ${initialState[0].description}`
    );
  });

  test("Debe  tener la clase complete si el todo es done", () => {
    const todo = { ...initialState, done: true };
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={0}
        toggleState={() => {}}
        deleteTodo={() => {}}
      />
    );
    expect(wrapper.find(".complete").exists()).toBe(true);
  });
});
