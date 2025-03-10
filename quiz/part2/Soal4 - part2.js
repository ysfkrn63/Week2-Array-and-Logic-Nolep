function pasanganTerbesar(num) {
  // you can only write your code here!
  var numb = num.toString(), potong, arr =[];
  for(var i =2; i <= numb.length; i++) {
    potong = numb.slice((i - 2), i);
    arr.push(potong);
  }
  return Math.max(...arr);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99