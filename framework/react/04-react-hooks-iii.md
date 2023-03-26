# React Hooks - III
> useImmer


## Hooks 3 - 1: `useImmer`
> `useImmer(initialState)` 跟 `useState` 非常相似。
> 當 `initialState` 的 data structure 比較複雜時，可以用 `useImmer` 來簡化 update function。


### Example 1 (useImmer):
```js
import { useImmer } from "use-immer";

// ...
const [person, setPerson] = useImmer({
  name: 'Merchu',
  hobbies: {
    travel: ['japan', 'america'],
    movies: ['xxx', 'ooo'],
    sports: ['badminton'],
  },
});

const updateFunction = () => {
  setPerson((draft) => {
    draft.hobbies.sports.push('volleyball');
  });
};

// ...
```

### Example 2 (useState):
```js
// ...
const [person, setPerson] = useState({
  name: 'Merchu',
  hobbies: {
    travel: ['japan', 'america'],
    movies: ['xxx', 'ooo'],
    sports: ['badminton'],
  }
});

const updateFunction = () => {
  setPerson({
    ...person,
    hobbies: {
      sports: [...person.hobbies.sports, 'volleyball'],
    },
  })
}

// ...
```


## Reference
[1] https://github.com/immerjs/use-immer

[2] https://juejin.cn/post/7035997633717993485