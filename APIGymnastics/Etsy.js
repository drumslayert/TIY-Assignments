// Put `items.json` in your `APIGymnastics` directory...
var items = require('items.json');
    test = require('mocha').it,
    expect = require('chai').expect;
// TODO: Setup mocha and chai...

test('this is the easy one', function(){
  expect(Array.isArray(items)).to.be.true; // What.
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  expect(items.length).to.equal(25); // It's haunting me now...
});

function items(){
  return items.length
}

test('finding the average price', function(){
  var yourAnswer = "start with `items`; use `Array` methods";

  expect(yourAnswer).to.be.closeTo(23.63, 0.01);
});

       //I need help

var prices = [ ], item;
 function foreachitem(index, length){
   items.forEach(function)(item, index, all){
     forEachItem(index, index + 1);
   }



//  for (var index = 0; index < items.length; index++)
//  item = items[index]


 // for (precondition; condition; postcondition){code;}

{
    // item = items[index];

    //expect(item).to.be.an('object');
    //expect(item.price).to.be.a('number');
    //expect(item.price).to.be.equal(12);
    // prices.push(item.price);

     //expect(prices).to.deep.equal([12]);


}

test('finding that perfect $15 item', function(){
  /**
   * @param {Array} items to search through
   * @return {Array} of `items` with `price` between `min` and `max` USD
   */

  function pricedBetween(){
    var items = new array()   //because I cant figure out how to get the average price, I cant figure out
    var min = 14;             // how to test my code for this test
    var max = 18;
    var i = items
    for (i = 0; i >= min && i <= max; i++) {
      return items;
    }
  }


  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    // Can you find their names _without_ code first?
  ]);
});

test('pond hopping', function(){
  expect( /* your answer */ ).to.deep.equal({
    name: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
