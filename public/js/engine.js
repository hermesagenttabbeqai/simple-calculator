/**
 * Calculation engine for simple-calculator.
 * Supports: +, -, *, /, ^ (power), % (as /100), sqrt(x)
 * Returns a number or the string "Error" on invalid input.
 * Does NOT use eval(); uses a sanitized Function constructor.
 */

export function calculate(expr) {
  try {
    let s = String(expr).trim();

    // 1. Replace sqrt(...) with Math.sqrt(...)
    s = s.replace(/sqrt\s*\(/g, 'Math.sqrt(');

    // 2. Replace ^ with ** (power)
    s = s.replace(/\^/g, '**');

    // 3. Replace trailing % on a number with /100  e.g. "50%" → "(50/100)"
    s = s.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');

    // 4. Sanitize: after the transformations, the expression should only contain:
    //    digits, decimal point, operators + - * / ( ) space, and "Math.sqrt"
    //    Strip "Math.sqrt" then check remaining chars.
    const stripped = s.replace(/Math\.sqrt/g, '');
    if (/[^0-9+\-*/.() \t]/.test(stripped)) {
      return 'Error';
    }

    // 5. Evaluate using a strict Function (no access to globals except Math via param)
    // eslint-disable-next-line no-new-func
    const fn = new Function('Math', '"use strict"; return (' + s + ');');
    const result = fn(Math);

    // 6. Guard against NaN (sqrt of negative) and Infinity (division by zero)
    if (typeof result !== 'number' || !isFinite(result) || isNaN(result)) {
      return 'Error';
    }

    return result;
  } catch {
    return 'Error';
  }
}
