// Function Composition

var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    let input = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      const currFunc = functions[i];

      input = currFunc(input);
    }

    return input;
  };
};

// Allow One Function Call

var once = function (fn) {
  let hasBeenCalled = false;
  return function (...args) {
    if (hasBeenCalled) {
      return undefined;
    } else {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
};

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Create a dict with keys sum, fib, factorial, and values as sets of arguments (as strings).
// When a function is called, arguments go into a designated set as strings.
// Before every call, cache is checked.

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
