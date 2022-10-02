# Hoisting
> 可以搭配 `hoisting.js` 實際執行使用狀況，node version: v14.17.6

## 基本概念
在執行任何程式碼前，JavaScript 會把函式以及變數的宣告放進記憶體裡面。

1. 不論是否為嚴格模式，函式以及變數都會提升
2. 只有宣告會提升，賦值不會提升
3. 優先權為函式大於變數


## 其他情境
### 函式所傳進來的參數
```js
myFunc2('parameter2');

function myFunc2(param) {
  console.log(param);  // parameter2
  var param = 'inner variable2';
}
```

等同於以下這個概念：

```js
myFunc2('parameter2');

function myFunc2(param) {
  var param = 'parameter2';
  var param;
  console.log(param);  // parameter2
  param = 'inner variable2';
}
```




## Reference
[1] https://github.com/aszx87410/blog/issues/34