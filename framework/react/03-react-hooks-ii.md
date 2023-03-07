# React Hooks - II
> - useMemo
> - useCallback

## Hooks 2 - 1: `useMemo`
> 有點像 vue 的 `computed`

### Definition:
cache the result of a calculation between re-renders.
```js
const result = useMemo(calculateValue, dependencies);
```

### Parameters:
- `calculateValue`: The function calculating the value that you want to cache. Should be pure and no arguments.
- `dependencies`: The list of all reactive values referenced inside of the calculateValue code.

### Returns:
- `result`: The result of calling calculateValue with no arguments. (initial render or subsequent renders with dependencies changed)
> would return an already stored value from the last render if the dependencies haven’t changed (subsequent renders)

### Example:
```js
import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  // ...
}
```

```js
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
const result = useMemo(() => {
  return {
    label: t('txt_label'),
    content: t('txt_content'),
  };
}, [t]);
```





## Reference
[1] https://beta.reactjs.org/reference/react