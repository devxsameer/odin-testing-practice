export function caesarCipher(str, sFactor) {
  if (!str) return "";
  if (!sFactor) return str;
  return str
    .split("")
    .map((char) => {
      let code = char.charCodeAt(0);

      // Helper to normalize shifts (always 0–25)
      const shift = ((sFactor % 26) + 26) % 26;

      // Uppercase letters (A-Z)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }

      // Lowercase letters (a-z)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }

      // Non-letters remain unchanged
      return char;
    })
    .join("");
}
