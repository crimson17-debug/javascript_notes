# JavaScript Notes - Zero to Mastery

> A personal documentation of my JavaScript learning journey, from core fundamentals to advanced DOM manipulation and browser internals.

## 📖 About The Project
This repository serves as a code-based notebook where I document my progress in mastering **JavaScript**. 

Instead of just theoretical notes, this repo contains practical code snippets, detailed comments, and logic experiments. It is designed to be a quick reference guide for revision and a tracker for my growth as a **CSE Student** and aspiring **SDE**.

**Maintainer:** M. Navya  

## 🛠️ Tech Stack
* **JavaScript (ES6+):** The core language used for all logic and syntax examples.
* **Node.js:** Used as the runtime environment to execute logic scripts.
* **HTML5:** Used to visualize DOM manipulation and Event Handling concepts.
* **Git:** Version control to track daily progress.

## 📂 Project Structure
The repository is organized into logical modules, progressing from syntax to browser interaction:

```text
JAVASCRIPT_NOTES/
├── javascript_notes/
   │
   ├── Basics/                     # Core Syntax & Logic
   │   ├── 02_datatypes.js         # Primitives vs References
   │   ├── 05_functions.js         # Function scope & Arrow functions
   │   ├── 07_arrays.js            # Array methods & traversal
   │   └── 08_classes.js           # OOP concepts in JS
   │
   ├── 11_dom_manip/               # Document Object Model (DOM)
   │   ├── htmldomqueryselectors   # getElementById, querySelector, etc.
   │   ├── modifyingdomelements    # innerHTML vs textContent
   │   └── setattribute            # Manipulating HTML attributes dynamically
   │
   ├── EventHandling/              # Browser Events
   │   ├── 2_Event_Listener        # addEventListener usage
   │   ├── 3_PhasesOfEvents        # Bubbling vs Capturing
   │   └── 4_event_object          # Understanding the (e) parameter
   │
   └── Advanced Concepts/          # Performance & Memory
       ├── 10_errorhandling.js     # Try, Catch, Throw
       ├── 12_cloning_garbage.js   # Shallow vs Deep copy & Garbage Collection
       ├── 14_reflow_repaint.html  # Browser rendering optimization
       └── 15_stackandheap.js      # Memory allocation visuals
```
## Key Concepts Covered

### 1. Core Logic & Architecture
* **Variable Scoping:** Deep dive into `var` (function scope) vs `let`/`const` (block scope).
* **Memory Management:** Visualizing how JavaScript allocates memory:
    * **Stack:** Stores Primitive types (Number, Boolean, String).
    * **Heap:** Stores Reference types (Objects, Arrays) and how pointers work.
* **OOP:** Implementation of Classes, Constructors, and Inheritance in ES6.

### 2. DOM Manipulation
* **Selectors:** mastering `getElementById`, `querySelector`, and `querySelectorAll` to target nodes.
* **Traversal:** Navigating the DOM tree (Parent, Child, and Sibling nodes).
* **Dynamic Updates:** Using `innerHTML`, `textContent`, and `setAttribute` to modify the UI without reloading.

### 3. Event Handling
* **Event Listeners:** Attaching events using `.addEventListener()` vs HTML attributes.
* **Propagation Phases:**
    * **Bubbling:** Events traveling up from target to root.
    * **Capturing:** Events traveling down from root to target.
* **The Event Object:** Accessing metadata like `e.target`, `e.key`, and mouse coordinates.

### 4. Browser Internals (Advanced)
* 
* **Reflow vs Repaint:** Understanding the performance cost of layout changes vs cosmetic changes.
* **Garbage Collection:** How JS automatically manages memory and cleans up unused objects.

## How to Run

Since this repository contains both **Logic Scripts** and **Visual Examples**, the running method depends on the file type.

### Option A: Logic Files (.js)
*Best for: Basics, Algorithms, and Array methods.*

1.  Open your terminal.
2.  Navigate to the specific folder:
    ```bash
    cd javascript_notes/Basics
    ```
3.  Run the file using Node.js:
    ```bash
    node 07_arrays.js
    ```

### Option B: DOM & Visual Files (.html)
*Best for: DOM Manipulation, Reflow/Repaint, and Events.*

1.  Locate the `.html` file in your file explorer (e.g., `14_reflow_repaint.html`).
2.  **Double-click** the file to open it in your web browser (Chrome/Edge).
3.  **Right-click** anywhere on the page and select **Inspect**.
4.  Go to the **Console** tab to see the logs and interactions.

## Future Roadmap
* [ ] **API Handling:** Consuming real-world APIs (Weather, Github User Data).

---
### Goals
**Aspiring SDE** - *Building logic, one line at a time.*
<br>
*Created with by Navya*
