# React Hooks - I
> - useState
> - useEffect
> - useContext

## Intro
### What is a Hook?
Hooks are functions that let you “hook into” React state and lifecycle features from function components. [1]


### Rules of Hooks
1. Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
2. Only call Hooks from React function components.


## Hooks 1 - 1: `useState`
### Definition:
`useState` is a React Hook that lets you add a state variable to your component.
  ```js
  const [state, setState] = useState(initialState)
  ```

### Parameters:
  - `initialState`: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions.

### Returns:
`useState` returns an `array` with **exactly two values**:
  - The current state. During the first render, it will match the initialState you have passed.
  - The set function that lets you update the state to a different value and trigger a re-render.

### Example:
  ```jsx
  function ExampleWithManyStates() {
    // Declare multiple state variables!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    // ...
  }
  ```


## Hooks 1 - 2: `useEffect`
### Definition:
`useEffect` is a React Hook that lets you synchronize a component with an external system.
  ```js
  useEffect(setup, dependencies?)
  ```
  > You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.

### Parameters:
  - `setup`: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function.
  - (optional) `dependencies`: The list of all reactive values referenced inside of the setup code.
### Returns:
  - `undefined`.
### Example:
  ```jsx
  import { useEffect } from 'react';
  import { createConnection } from './chat.js';

  function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      return () => {
        connection.disconnect();
      };
    }, [serverUrl, roomId]);
    // ...
  }
  ```
> add empty `[]` as the second argument to the `useEffect` call to skip unnecessarily re-running.
> ```js
> useEffect(() => {
>   // ...
> }, []);


## Hooks 1 - 3: `useContext`
> 使用父 / 祖父層傳下來的 context

### Definition:
`useContext` is a React Hook that lets you read and subscribe to context from your component.
  ```js
  const value = useContext(SomeContext);
  ```

### Parameters:
  - `SomeContext`: The context that you’ve previously created with `createContext`.

### Returns:
- context value for the calling component. 

  > It is determined as the `value` passed to the closest `SomeContext.Provider` above the calling component in the tree.

### Example:
1. createContext
    ```jsx
    // ThemeContext.jsx
    import { createContext } from 'react';

    const themes = {
      light: {
        foreground: "#000000",
        background: "#eeeeee"
      },
      dark: {
        foreground: "#ffffff",
        background: "#222222"
      }
    };

    const ThemeContext = createContext(themes.light);
    ``` 
2. Provide the context
    ```jsx
    // ThemeContext.jsx
    import ThemedButton from './ThemeButton';

    const themes = { /** ... */ };
    function App() {
      return (
        <ThemeContext.Provider value={themes.dark}>
          <Toolbar />
        </ThemeContext.Provider>
      );
    }

    function Toolbar(props) {
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }
    ```
3. useContext
    ```jsx
    import ThemeContext from '../ThemeContext';

    function ThemedButton() {
      const theme = useContext(ThemeContext);
      return (
        <button style={{ background: theme.background, color: theme.foreground }}>
          I am styled by theme context!
        </button>
      );
    }
    ```

## Reference
[1] https://reactjs.org/docs/hooks-overview.html

[2] https://beta.reactjs.org/reference/react
