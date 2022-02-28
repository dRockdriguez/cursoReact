import React from "react";
import ReactDOM from "react-dom";
import { CounterApp } from "./components/01-useState/CounterApp";
import { CounterCustomHook } from "./components/01-useState/CounterCustomHook";
import { FormCustomHook } from "./components/02-useEffect/FormCustomHook";
import { SimpleForm } from "./components/02-useEffect/SimpleForm";
import { FocusScreen } from "./components/04-useRef/FocusScreen";
import { UseRefExample } from "./components/04-useRef/UseRefExample";
import { LayoutEffect } from "./components/05-useLayoutEffect/LayoutEffect";
import { CallbackHook } from "./components/06-memos/CallbackHook";
import { MemoHook } from "./components/06-memos/MemoHook";
import { Memorize } from "./components/06-memos/Memorize";
import { Padre } from "./components/07-tarea-memo/Padre";
import { MultipleCustomHooks } from "./components/examples/MultipleCustomHooks";
import { HookApp } from "./HookApp";

ReactDOM.render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>,
  document.getElementById("root")
);
