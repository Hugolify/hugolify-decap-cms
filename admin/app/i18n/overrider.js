/**
 * Simple object check.
 * @param {any} item
 * @returns {boolean}
 */
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param {any} target
 * @param {any} sources
 * @return {any}
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

/**
 * Merge deep custom translations onto base translations
 * @param {Object} base
 * @param {Object} overrideWith
 */
export function overrideTranslations(base, overrideWith) {
  return mergeDeep(base, overrideWith);
}
