/**
 * @see https://atcoder.jp/contests/abs/tasks/abc086_a
 */

import * as fs from "fs";

const input = () => fs.readFileSync("/dev/stdin", "utf8").trim();

// const isOdd = (n: number) => (n & 1) === 1;
// export function solution(a: number, b: number) {
//   return isOdd(a) && isOdd(b) ? "Odd" : "Even";
// }

export function solution(a: number, b: number) {
  return (a * b) % 2 === 1 ? "Odd" : "Even";
}

function act() {
  const [a, b] = input().split(" ").map(Number);
  console.log(solution(a, b));
}

if (import.meta.main) {
  act();
}
