# UnminifyJS

Convert minified js code to readable source code.

> 灵感来自于 https://github.com/pionxzh/wakaru/tree/main/packages/unminify, 正好最近也在学习 ast 逆向，所以打算自己实现这些 transformation。

## Readability

### `un-boolean`
```diff
- !0
+ true

- !1
+ false
```

### `un-undefined`
```diff
- void 0
+ undefined
```

### `un-infinity`
```diff
- 1 / 0
+ Infinity

- -1 / 0
+ -Infinity
```

### `un-numeric-literal`
```diff
- 1e3
+ 1000 /* 1e3 */

- 0b101010
+ 42 /* 0b101010 */

- 0x123
+ 291 /* 0x123 */
```

### `un-block`
```diff
- if (x) foo()
+ if (x) {
+   foo()
+ }

- if (x)
-   foo()
- else
-   bar()
+ if (x) {
+   foo()
+ } else {
+   bar()
+ }

- for (;;) foo()
+ for (;;) {
+   foo()
+ }
```

### `un-variable-merging`

Separate variable declarators into multiple statements.

```diff
- var a = 1, b = true, c = func(d);
+ var a = 1;
+ var b = true;
+ var c = func(d);
```

Separate variable declarators that are not used in for statements.

```diff
- for (var i = 0, j = 0, k = 0; j < 10; k++) {}
+ var i = 0;
+ for (var j = 0, k = 0; j < 10; k++) {}
```

### `un-sequence-expression`

Separate sequence expression into multiple statements.

```diff
- a(), b(), c()
+ a()
+ b()
+ c()

- while (a(), b(), c++ > 0) {}
+ a()
+ b()
+ while (c++ > 0) {}

- return a(), b(), c()
+ a()
+ b()
+ return c()
```


### `un-assignment-expression`

Separate chained assignment into multiple statements.

```diff
- a = b = c = 1
+ a = 1
+ b = 1
+ c = 1
```

### `un-bracket-notation`

Simplify bracket notation.

```diff
- obj['prop']
+ obj.prop

- obj['var']
+ obj['var']
```

### `un-while-loop`

Converts for loop without init and update to while loop.

```diff
- for (;;) {}
+ while (true) {}

- for (; i < 10;) {
-   console.log(i);
- }
+ while (i < 10) {
+   console.log(i);
+ }
```

### `un-flip-comparisons`

Flips comparisons that are in the form of "literal comes first" to "literal comes second".

```diff
- if ("dark" === theme) {}
+ if (theme === "dark") {}

- while (10 < count) {}
+ while (count > 10) {}
```

### `un-conditionals`

Unwraps nested ternary expressions and binary expression into if-else statements or switch statements.

#### If-Else

```diff
- a ? b() : c ? d() : e()
+ if (a) {
+   b();
+ } else if (c) {
+   d();
+ } else {
+   e();
+ }
```

### `un-return`

Simplify the last return statements.

```diff
function foo() {
  const a = 1;
  if (a) {
    return a;
  }
- return void 0;
}

const bar = () => {
- return void foo();
+ foo();
}
```

### `un-useless-statement`
```diff
- Object.create;
- new WeakMap;
- Object.prototype.hasOwnProperty;
```

### `smart-rename`
```diff
- const {
-   gql: t,
-   dispatchers: o,
-   listener: i
- } = n;
- o.delete(t, i);
+ const {
+   gql,
+   dispatchers,
+   listener
+ } = n;
+ dispatchers.delete(gql, listener);
```


### `un-iife`

Improve the readability of code inside IIFE. Useful for short code snippets / userscripts.

Rename the parameters and move the passed-in arguments to the top.

```diff
- (function(i, s, o, g, r, a, m) {
-   i['GoogleAnalyticsObject'] = r;
-   i[r].l = 1 * new Date();
-   a = s.createElement(o);
-   m = s.getElementsByTagName(o)[0];
-   a.async = 1;
-   a.src = g;
-   m.parentNode.insertBefore(a, m);
- })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
+ (function(window, document, a, m) {
+   const o = 'script';
+   const g = 'https://www.google-analytics.com/analytics.js';
+   const r = 'ga';
+   window['GoogleAnalyticsObject'] = r;
+   window[r].l = 1 * new Date();
+   a = document.createElement(o);
+   m = document.getElementsByTagName(o)[0];
+   a.async = 1;
+   a.src = g;
+   m.parentNode.insertBefore(a, m);
+ })(window, document);
```

## Syntax Upgrade

### `un-template-literal`

Restore template literal syntax from string concatenation.

```diff
- "the ".concat(first, " take the ").concat(second, " and ").concat(third);
+ `the ${first} take the ${second} and ${third}`
```

### `un-parameter`

Restore parameters. Support normal parameters and default parameters.

```diff
- function foo() {
-   var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "foo";
-   var b = arguments.length > 1 ? arguments[1] : undefined;
-   if (c === void 0) c = "bar";
- }
+ function foo(a = "foo", b, c = "bar") {}
```

### `un-es6-class`

Restore `Class` definition from the constructor and the prototype.
Currently, this transformation only supports output from **TypeScript**.

Supported features:
- constructor
- instance properties
- instance methods
- static methods
- static properties
- getters and setters
- async method (share the same limitations from [`un-async-await`](#un-async-await-experimental-wip))

Unsupported features:
- inheritance
- decorators
- private flag

```diff
- var Foo = (function() {
-   function t(name) {
-     this.name = name;
-     this.age = 18;
-   }
-   t.prototype.hi = function logger() {
-     console.log("Hello", this.name);
-   };
-   t.staticMethod = function staticMethod() {
-     console.log("static");
-   };
-   t.instance = new t("foo");
-   return t;
- })();
+ class Foo {
+   constructor(name) {
+     this.name = name;
+     this.age = 18;
+   }
+   hi() {
+     console.log("Hello", this.name);
+   }
+   static staticMethod() {
+     console.log("static");
+   }
+   static instance = new Foo("foo");
+ }
```

### `un-async-await` (Experimental) (WIP)

Restore async/await from helper `__awaiter` and `__generator`.
Currently, this transformation only supports output from **TypeScript**.

And it does not handled control flow properly, as it needs graph analysis.

Please aware there are **tons of edge cases** that are not covered by this rule.

```diff
-function func() {
-  return __awaiter(this, void 0, void 0, function () {
-    var result, json;
-    return __generator(this, function (_a) {
-      switch (_a.label) {
-        case 0:
-          console.log('Before sleep');
-          return [4 /*yield*/, sleep(1000)];
-        case 1:
-          _a.sent();
-          return [4 /*yield*/, fetch('')];
-        case 2:
-          result = _a.sent();
-          return [4 /*yield*/, result.json()];
-        case 3:
-          json = _a.sent();
-          return [2 /*return*/, json];
-      }
-    });
-  });
-}
+async function func() {
+  var result, json;
+  console.log('Before sleep');
+  await sleep(1000);
+  result = await fetch('');
+  json = await result.json();
+  return json;
+}
```

## Clean Up

### `un-esmodule-flag`

Remove the `__esModule` flag from the module.

```diff
- Object.defineProperty(exports, "__esModule", { value: true });
```

### `un-use-strict`

Remove the `"use strict"` directive.

```diff
- "use strict";
```

## Extra

### `lebab`

> Lebab transpiles your ES5 code to ES6/ES7. It does exactly the opposite of what Babel does.

We integrated part of rules from [lebab](https://github.com/lebab/lebab) to unminify the code.\
By utilizing lebab, we can save the repetitive work of writing the same transformations ourselves.
