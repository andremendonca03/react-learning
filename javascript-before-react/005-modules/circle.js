import randomNumber from "./randomNumber.js";

function area(radius) {
  return Math.PI * radius * radius;
}

function circumference(radius) {
  return 2 * radius * Math.PI;
}

function number() {
  return randomNumber();
}

const circle = {
  area,
  circumference,
  number,
};

export default circle;
