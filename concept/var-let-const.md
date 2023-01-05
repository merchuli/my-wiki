# var, let and const


|                                        | var              | let         | const                                                             |
|----------------------------------------|------------------|-------------|-------------------------------------------------------------------|
| scope                                  | `function-scoped` or `globally-scoped` | `block-scoped` | `block-scoped`                                                       |
| hoisting                               | V                | X           | X                                                                 |
| re-declared                            | V                | X           | X                                                                 |
| can be declared without initialization | V                | V           | X  |
| reassigned by assignment operator                       | V                | V           | X                                                                 |

> `const` cannot be declared without initialization, or it will occur error `Uncaught SyntaxError: Missing initializer in const declaration`

> If a `const` variable is an `object` or `array`, its properties or items can be updated or removed without using the assignment operator.


## Reference
[1] https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/

[2] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

[3] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

[4] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
