# JavaScript Data Types

JavaScript has different **data types** to represent various kinds of values.  
Every variable in JavaScript holds a value of a specific type.

There are two main categories:
1. **Primitive Data Types**
2. **Non-Primitive (Reference) Data Types**

---

## 🧱 1. Primitive Data Types

Primitive data types are the **basic building blocks** of JavaScript.  
They are **immutable** (cannot be changed) and **copied by value**.

### 🧩 List of Primitive Types

| Type | Example | Description |
|------|----------|-------------|
| **String** | `"Hello"`, `'World'`, `` `Hi` `` | Text data |
| **Number** | `42`, `3.14`, `-7` | Numeric values (integer + float) |
| **BigInt** | `12345678901234567890n` | Large integers |
| **Boolean** | `true`, `false` | Logical true/false |
| **Undefined** | `undefined` | Variable declared but not assigned |
| **Null** | `null` | Intentional absence of value |
| **Symbol** | `Symbol('id')` | Unique and immutable identifier |

---

### 1️⃣ String
```javascript
let name = "Gopi";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Gopi!
```
Strings can use single quotes ' ', double quotes " ", or backticks `, which support template literals and multi-line strings.


### 2️⃣ Number
The Number type includes both integers and floating-point numbers.
```javascript
let age = 25;
let price = 99.99;
let temperature = -10;
console.log(typeof NaN); // "number"
```
JavaScript uses a single Number type for all numeric values.

### 3️⃣ BigInt
BigInt is used for very large integers that exceed the Number limit.

```javascript
let bigNum = 123456789012345678901234567890n;
console.log(bigNum + 10n); // 123456789012345678901234567900n
console.log(typeof bigNum); // bigint
```
⚠️ You can’t mix BigInt and Number in the same operation.

### 4️⃣ Boolean
Booleans represent true or false values, often used in conditions.
```javascript
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  console.log("Welcome back!");
}

```

### 5️⃣ Undefined
A variable that’s declared but not initialized gets the value undefined.
```javascript
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"
```

### 6️⃣ Null
**null** represents an intentional absence of a value.
```javascript
let data = null;
console.log(data); // null
console.log(typeof data); // "object" (this is a JavaScript bug!)
```
🧠 Note: null is different from undefined.
- undefined → “not assigned yet”
- null → “intentionally empty”

### 7️⃣ Symbol
Symbol creates unique and immutable identifiers, often used for object keys.
```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (Symbols are always unique)
```

---
<br>
<br>

## 🧱 2. Types of Non-Primitive Data in JavaScript

Non-primitive types can store collections or complex structures.
They are mutable and copied by reference.

There are **three main non-primitive types**:

| Type | Example | Description |
|------|----------|-------------|
| **Object** | `{ name: "Gopi", age: 25 }` | Stores key–value pairs |
| **Array** | `[1, 2, 3, 4]` | Stores ordered collections of values |
| **Function** | `function greet() {}` | Stores reusable blocks of code |

---
🧠 Note: We will learn each of these non-primitive types in coming sessions 

<br>
<br>

📘 Author: **Gopi Nayak** <br>
📅 Last Updated: November 2025