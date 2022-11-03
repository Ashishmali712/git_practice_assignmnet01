let count = 0;
let num = 7;
for (i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}
if (count == 2) {
  console.log(" Not Prime");
} else {
  console.log("Prime");
}