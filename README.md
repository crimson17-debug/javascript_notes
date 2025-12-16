# JavaScript Notes - Zero to Mastery

> A personal documentation of my JavaScript learning journey, from core fundamentals to advanced concepts.

## About The Project
This repository serves as a code-based notebook where I document my progress in mastering **JavaScript**. 

Instead of just theoretical notes, this repo contains practical code snippets, detailed comments, and logic experiments. It is designed to be a quick reference guide for revision and a tracker for my growth as a **CSE Student** and aspiring **SDE**.

**Maintainer:** M. Navya  
**Status:** In Progress (Basics Module)

## 🛠️ Tech Stack
* **JavaScript (ES6+):** The core language used for all logic and syntax examples.
* **Node.js:** Used as the runtime environment to execute these scripts outside the browser.
* **Git:** Version control to track daily progress.

## 📂 Project Structure
The notes are organized conceptually, starting with the basics of the language:

```text
javascript_notes/
├── 01_basics/                  # Core Fundamentals
│   ├── 01_variables.js         # distinct usage of let, const, and var
│   ├── 02_dataTypes.js         # Primitive types and strict mode
│   ├── 03_conversions.js       # Type casting and coercion logic
│   ├── 04_operations.js        # Mathematical and comparison operations
│   ├── datatypes_summary.js    # Stack (Primitive) vs Heap (Reference) memory
│   └── test.js                 # Sandbox for quick logic experiments
│
└── README.md                   # Documentation
```
## Key Concepts Covered
* **Variable Architecture:** Understanding the distinct scoping rules of `var`, `let`, and `const` and when to use which.
* **Data Type Standards:** Deep dive into ECMA standards, covering Primitive types (String, Number, Boolean, Symbol) vs. Non-Primitive (Objects, Arrays).
* **Type Coercion:** Handling the tricky behavior of JavaScript during conversions (e.g., `1 + "2"` vs `1 - "2"`).
* **Memory Allocation:** Visualizing how JavaScript manages data:
    * **Stack Memory:** Used for Primitive types (Copy by value).
    * **Heap Memory:** Used for Reference types (Copy by reference).

## How to Run
Unlike the StarLiners web project, these are backend logic scripts. You will need **Node.js** installed to run them locally.

1.  **Clone** this repository:
    ```bash
    git clone https://github.com/crimson17-debug/javascript_notes.git
    ```
2.  Navigate to the directory:
    ```bash
    cd javascript_notes/01_basics
    ```
3.  **Execute** a specific file using Node:
    ```bash
    node 01_variables.js
    ```
    *(Output will be displayed directly in your terminal)*

---
### Goals
**Aspiring SDE** - *Building logic, one line at a time.*
<br>
*Created with by Navya*
