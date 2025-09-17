export function toCamelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function toPascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}