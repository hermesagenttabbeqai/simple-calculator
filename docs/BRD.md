# Business Requirements Document — Simple Calculator

| Field       | Value                     |
|-------------|---------------------------|
| Project     | simple-calculator         |
| Requester   | Mhmd H                    |
| Date        | 2026-10-04                |
| Version     | v1                        |

---

## 1 Summary

A lightweight, browser-based calculator for personal daily use. It supports the four basic operations, square root, power, and percentage, and can be driven entirely by keyboard. The app is a static web page with a clean, light/minimal design.

---

## 2 Users and Goals

| User   | Goal                                              |
|--------|---------------------------------------------------|
| Mhmd H | Quickly perform everyday maths from any browser, no install needed |

---

## 3 Functional Requirements

| ID    | Requirement                                                                                  |
|-------|----------------------------------------------------------------------------------------------|
| BR-01 | The user can enter numbers using on-screen buttons or keyboard keys (0–9, `.`).              |
| BR-02 | The user can perform addition (+), subtraction (−), multiplication (×), and division (÷).   |
| BR-03 | The user can calculate the square root (√) of the current number.                           |
| BR-04 | The user can raise the current number to a power using the `^` operator.                    |
| BR-05 | The user can apply a percentage (%) to convert the current number to its decimal fraction.  |
| BR-06 | The user can clear the current entry (C) and fully reset the calculator (AC).               |
| BR-07 | The user can delete the last entered digit with a backspace button or keyboard Backspace.   |
| BR-08 | The app shows the current expression and the live/running result in a display area.         |
| BR-09 | The app prevents division by zero and shows a clear error message ("Error").               |
| BR-10 | Keyboard shortcuts map to buttons: digits, `+`, `-`, `*`, `/`, `^`, `%`, `Enter` (=), `Escape` (AC), `Backspace`. |

---

## 4 Non-Functional Requirements

| ID     | Requirement                                                                         |
|--------|-------------------------------------------------------------------------------------|
| NFR-01 | The app loads in under 2 seconds on a standard mobile connection.                   |
| NFR-02 | The layout is mobile-first and usable on screens 320 px wide and larger.            |
| NFR-03 | Minimum touch target size: 48 × 48 px per button.                                  |
| NFR-04 | Works in the latest two versions of Chrome, Firefox, and Safari.                   |
| NFR-05 | No external dependencies (no frameworks, no CDN calls); single HTML file delivery. |
| NFR-06 | WCAG 2.1 AA colour contrast for all text and button labels.                        |

---

## 5 Recommendations Accepted

| Feature         | Reason accepted                                    |
|-----------------|----------------------------------------------------|
| Keyboard input  | Faster on desktop; no extra UI needed              |
| Percentage (%)  | Useful for tips and discounts in daily-use context |

---

## 6 Assumptions

- No history or memory between sessions (nothing is stored in localStorage).
- The power operator (`^`) works on integer and decimal exponents.
- Square root of a negative number returns "Error".
- The app is a single HTML file (inline CSS and JS) for simplicity.

---

## 7 Out of Scope

- User accounts or saved history
- Trigonometric / logarithmic functions
- Unit conversion
- Server-side logic or any back-end
- Native mobile app

---

## 8 Acceptance Checklist

- [ ] All BR-01 to BR-10 work correctly in Chrome, Firefox, and Safari.
- [ ] Division by zero displays "Error" and the calculator can be reset.
- [ ] Square root of a negative number displays "Error".
- [ ] Keyboard input maps correctly to all operations.
- [ ] Layout is usable on an iPhone SE (375 px) without horizontal scroll.
- [ ] Page loads without any console errors.
