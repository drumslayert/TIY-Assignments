var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc



test('getting a list of multiples of 3', function(){
  // Now what should go in here?
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(multiplesof3(18) === (3, 6, 9);
//  assert.equal(multiplesof3(63) === (3, 6, 9, 12, 15, 18);
//  assert.equal(multiplesof3(408) === (3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48);

}); // END test 3s
assert.isDefined(toEnglish);
assert.isFunction(toEnglish);
assert.equal(multiplesof5(18) === 3, 6, 9);
assert.equal(multiplesof5(63) === 3, 6, 9, 12, 15, 18);
assert.equal(multiplesof5(408) === 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48);

/*
var i = 0;
for(counter = i; i < 20; counter++){
if (counter % 3 ==0){
i ++;
                           // i got this code to add up the multiples but It wouldnt stop at less
}                          // than 20 like I had it set
console.log(counter)
}
*/
test('make threes'), function()[
  
]








function multiplesof3(){  // Im not sure how to get the multiples to list properly
var sum = 0;
  for (var i = 0; i < 10; i++) {
    if (i % 3 === 0) {     // I tested sum in the console and it does the math
    sum = sum + i;         // Im lost at how to finsh write this function and how to test it
  }                        // I think I did this completely wrong but Im at a loss
}
return sum;
}

  test('getting a list of multiples of 5', function(){
    // Now what should go in here?
    assert.isDefined(toEnglish);
    assert.isFunction(toEnglish);
    assert.equal(multiplesof5(10) === 5);
    assert.equal(multiplesof5(20) === 5, 10 , 15);
    assert.equal(multiplesof5(50) === 5, 10 , 15, 20, 25, 30, 35, 40 ,45);
  }); // END test 5s

  function multiplesof5(){
  var sum = 0;
    for (var i = 0; i < 50; i++) {
      if (i % 5 === 0) {
      sum = sum + i;
    }
  }
  return ;
}
