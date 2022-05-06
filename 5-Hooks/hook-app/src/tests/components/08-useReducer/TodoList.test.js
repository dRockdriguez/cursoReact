import { todos as initialState } from "../../fixtures/demoTodos";
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
const mockDelete = jest.fn((x) => {});
const mockToggle = jest.fn((x) => {});

describe("TodoList", () => {
  test("Debe mostrar el componente", () => {
    const wrapper = shallow(
      <TodoList
        todos={initialState}
        toggleState={mockToggle}
        deleteTodo={mockDelete}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar  todos los todos", () => {
    const wrapper = shallow(
      <TodoList
        todos={initialState}
        toggleState={mockToggle}
        deleteTodo={mockDelete}
      />
    );
    expect(wrapper.find("TodoListItem").length).toBe(initialState.length);
  });
});
