# Simple Calculator — Development Plan

Based on BRD version: v1 · Date: 2026-10-04 · Plan version: v1

---

## Architecture

| File                    | Purpose                                                         |
|-------------------------|-----------------------------------------------------------------|
| `public/index.html`     | App shell: calculator layout, button grid, display area        |
| `public/css/style.css`  | Light/minimal theme, mobile-first responsive layout            |
| `public/js/engine.js`   | Pure calculation logic: evaluate expressions, handle errors    |
| `public/js/ui.js`       | DOM wiring: button clicks, keyboard events, display updates    |
| `tests/engine.test.js`  | Unit tests for every engine function                           |

---

## Tasks

### T1: Calculation engine
- **Goal:** Implement all maths logic as pure exported functions with no DOM dependency.
- **BRD IDs:** BR-02, BR-03, BR-04, BR-05, BR-09
- **Files:** `public/js/engine.js`, `tests/engine.test.js`
- **Acceptance tests:**
  - `calculate("3+4")` → `7`
  - `calculate("10/2")` → `5`
  - `calculate("2^8")` → `256`
  - `calculate("sqrt(9)")` → `3`
  - `calculate("50%")` → `0.5`
  - `calculate("5/0")` → `"Error"`
  - `calculate("sqrt(-1)")` → `"Error"`
  - `calculate("2.5*4")` → `10`
- **Depends on:** none

### T2: UI layout and styling
- **Goal:** Build the HTML structure and CSS for the calculator — display area and button grid.
- **BRD IDs:** BR-01, BR-06, BR-07, BR-08, NFR-01, NFR-02, NFR-03, NFR-05, NFR-06
- **Files:** `public/index.html`, `public/css/style.css`
- **Acceptance tests:**
  - Page renders with a display area showing expression and result rows.
  - Button grid has: 0–9, `.`, `+`, `−`, `×`, `÷`, `^`, `%`, `√`, `=`, `C`, `AC`, `⌫`.
  - Each button is at least 48 × 48 px on a 375 px-wide screen.
  - No horizontal scroll on iPhone SE (375 px).
  - Colour contrast passes WCAG 2.1 AA.
- **Depends on:** none (can run in parallel with T1)

### T3: UI logic and keyboard wiring
- **Goal:** Wire button clicks and keyboard events to the engine, update the display on every input.
- **BRD IDs:** BR-01, BR-06, BR-07, BR-08, BR-09, BR-10
- **Files:** `public/js/ui.js`
- **Acceptance tests:**
  - Clicking `7`, `+`, `3`, `=` displays `10`.
  - Pressing keyboard `7`, `+`, `3`, `Enter` displays `10`.
  - `Escape` key triggers AC (full reset).
  - `Backspace` key deletes the last character.
  - `√` button on `−9` shows "Error" and the calculator can be reset.
  - Division by zero shows "Error" and the calculator can be reset.
- **Depends on:** T1 (engine exports), T2 (HTML elements exist)

---

## Parallel batches

| Batch | Tasks | Can start when         |
|-------|-------|------------------------|
| 1     | T1, T2 | Now (independent)     |
| 2     | T3    | T1 and T2 are merged  |

---

## Coverage

| BRD ID | Task(s) |
|--------|---------|
| BR-01  | T2, T3  |
| BR-02  | T1      |
| BR-03  | T1      |
| BR-04  | T1      |
| BR-05  | T1      |
| BR-06  | T2, T3  |
| BR-07  | T2, T3  |
| BR-08  | T2, T3  |
| BR-09  | T1, T3  |
| BR-10  | T3      |
| NFR-01 | T2      |
| NFR-02 | T2      |
| NFR-03 | T2      |
| NFR-04 | T2      |
| NFR-05 | T2      |
| NFR-06 | T2      |

---

## Risks and open questions

- `^` and `sqrt()` are not native JS operators — the engine will parse them before using `Function` or `Math`; a custom recursive parser is safer than `eval`.
- No risks for static deployment; GitHub Pages workflow is already in the template.
