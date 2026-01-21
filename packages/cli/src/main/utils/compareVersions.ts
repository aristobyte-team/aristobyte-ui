export function compareVersions(v1: string, v2: string) {
  const a = v1.replace(/^v/, "").split(".").map(Number);
  const b = v2.replace(/^v/, "").split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) return 1;
    if (a[i] < b[i]) return -1;
  }
  return 0;
}
