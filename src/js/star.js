function canIterate(item) {
  try {
    if (item[Symbol.iterator]) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

console.log(`new Map() ${canIterate(new Map())}`); // true
console.log(`new Set() ${canIterate(new Set())}`); // true
console.log(`null ${canIterate(null)}`); // false
console.log(`10 ${canIterate(10)}`); // false
console.log(`Netology ${canIterate('Netology')}`); // true
