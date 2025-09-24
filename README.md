# 🧪 Odin Testing Practice

Implementation of the **Testing Practice Project** from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice).  
This project focuses on writing **unit tests with Jest** to practice **Test-Driven Development (TDD)** and ensure code correctness.

---

## 📚 Overview

The goal of this project is to build small utility functions in JavaScript and test them thoroughly using **Jest**.  
It helps reinforce:

- Test-driven thinking
- Handling edge cases
- Structuring tests with `describe` and `test` blocks
- Running tests in watch mode

---

## ⚡ Functions Implemented

### 1. `capitalize(string)`

- Returns the string with the **first character capitalized**.
- Example: `"javascript"` → `"Javascript"`

---

### 2. `reverseString(string)`

- Reverses the given string.
- Example: `"JavaScript"` → `"tpircSavaJ"`

---

### 3. `calculator` object

Provides four basic operations:

- `add(a, b)` → sum of two numbers
- `subtract(a, b)` → difference of two numbers
- `divide(a, b)` → quotient of two numbers (returns `Infinity` when dividing by zero)
- `multiply(a, b)` → product of two numbers

---

### 4. `caesarCipher(string, shift)`

- Shifts each letter in the string by the given factor.
- Handles:
  - Wrapping around the alphabet (`z → a`)
  - Uppercase and lowercase letters
  - Negative shift factors
  - Non-alphabetic characters (left unchanged)

Example:

- `"xyz", 2` → `"zab"`
- `"ABC", -2` → `"YZA"`

---

### 5. `analyzeArray(array)`

- Takes an array of numbers and returns an object with:
  - `average`
  - `min`
  - `max`
  - `length`

Example:  
`[1, 8, 3, 4, 2, 6]` →

```js
{
  average: 4,
  min: 1,
  max: 8,
  length: 6
}
```

---

## ⚡ Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/devxsameer/odin-testing-practice.git
   cd odin-testing-practice
   ```

1. Install dependencies

   ```bash
   npm install
   ```

1. Run tests

   ```bash
   npm test
   ```

1. Run tests in watch mode

   ```bash
   npm run test:watch
   ```

---

## 🛠️ Technologies Used

- JavaScript (ES6 Modules)
- Jest for testing
- Babel (minimal config for ES6 import/export support)

---

## 🔍 Learning Outcomes

- Writing and organizing unit tests
- Practicing TDD (Test Driven Development)
- Handling edge cases like:
  - Empty strings
  - Empty arrays
  - Division by zero
  - Negative Caesar Cipher shifts

---

## 📂 Project Structure

```plaintext
odin-testing-practice/
├── src/
│   ├── capitalize.js
│   ├── capitalize.test.js
│   ├── reverseString.js
│   ├── reverseString.test.js
│   ├── calculator.js
│   ├── calculator.test.js
│   ├── caesarCipher.js
│   ├── caesarCipher.test.js
│   ├── analyzeArray.js
│   └── analyzeArray.test.js
├── .gitignore
├── babel.config.js
├── package-lock.json
├── package.json
└── README.md
```

---

This project is part of [The Odin Project Curriculum](https://www.theodinproject.com/).

Built with ❤️ by `Sameer Ali`.
