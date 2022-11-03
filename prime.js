let factor = 0;
let number = 15;
for (i = 1; i <= number; i++) {
  if (number % i == 0) {
    factor++;
  }
}
if (factor == 2) {
  console.log(" Not a  Prime Number");
} else {
  console.log("It is a prime Number");
}
