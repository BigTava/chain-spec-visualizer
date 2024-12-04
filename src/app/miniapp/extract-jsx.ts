export function extractJsxCode(input: string) {
  const jsxStart = input.indexOf("```jsx");
  const jsxEnd = input.indexOf("```", jsxStart + 5);

  if (jsxStart !== -1 && jsxEnd !== -1) {
    let code = input.slice(jsxStart + 6, jsxEnd).trim();

    code = code.replace(/export\s+default\s+/g, "");

    return code;
  }

  throw new Error("No JSX code block found in the input string.");
}
