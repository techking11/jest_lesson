export function forEach(items: any[], callback: (val: any) => void): void {
  for (const item of items) {
    callback(item);
  }
}
