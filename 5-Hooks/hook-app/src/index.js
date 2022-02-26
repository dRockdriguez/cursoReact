import React from "react";
import ReactDOM from "react-dom";
import { CounterApp } from "./components/01-useState/CounterApp";
import { CounterCustomHook } from "./components/01-useState/CounterCustomHook";
import { FormCustomHook } from "./components/02-useEffect/FormCustomHook";
import { SimpleForm } from "./components/02-useEffect/SimpleForm";
import { FocusScreen } from "./components/04-useRef/FocusScreen";
import { UseRefExample } from "./components/04-useRef/UseRefExample";
import { MultipleCustomHooks } from "./components/examples/MultipleCustomHooks";
import { HookApp } from "./HookApp";

ReactDOM.render(
  <React.StrictMode>
    <UseRefExample />
  </React.StrictMode>,
  document.getElementById("root")
);
