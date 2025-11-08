// Ver si numero es par, devuelve boolean
function numberIsEven(value) {
  if (typeof value !== "number") {
    throw new Error("This value is not number");
  }

  return value % 2 == 0;
}

module.exports = { numberIsEven };