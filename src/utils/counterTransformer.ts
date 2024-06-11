export function increase(count: number): number {
  if (count > 10) {
    return count + 3;
  } else if (count > 5) {
    return count + 2;
  } else {
    return count + 1;
  }
}

export function decrease(count: number): number {
  if (count > 10) {
    return count - 3;
  } else if (count > 5) {
    return count - 2;
  } else {
    return count - 1;
  }
}
