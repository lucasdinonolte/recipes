export function pluralize(count: number, singular: string, plural?: string): string {
  if (count === 1) {
    return singular;
  } else {
    return plural || singular + 's';
  }
}

export function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
