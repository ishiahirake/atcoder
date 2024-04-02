import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const [a, b] = input.trim().split(" ").map(Number);

const isOdd = (n: number) => (n & 1) === 1;

if (isOdd(a) && isOdd(b)) {
  console.log("Odd");
} else {
  console.log("Even");
}
