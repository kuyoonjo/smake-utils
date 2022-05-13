export function quote(str: string) {
  if (!str) return '';
  if (str.includes(' ')) return `"${str}"`;
  return str;
}
