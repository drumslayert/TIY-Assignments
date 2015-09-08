# `JavaScript` help guide
**4 Primitive Types**
 1. `null`  - Has only one value and is intentionally empty.  
   * _Example:_ `var name = (null);`
 2. `Boolean`  - only has two values that equal either `true` or `false`.   
   * _Example:_ `var name = (true);`
 3. `number`  - 3.14159 is a ratio.  Whole numbers are integers.  
   * _Example:_ `var name = (1);`
 4. `string`  - Is any text or a 'string' of text within single or double quotes.  
   * _Example:_ `var name = ('true');`
 
**Basic Operations**
  1. Arithmetic - Basic math operations such as multiplication, division, addition and subtraction.
   * _Examples:_ + ,/ , ,- ,* ,  `14 * 5`  would return `70`, `8 + 4` would return `12`.
  2. Comparison - Comparison operators always return a Boolean. 
   * _Example:_ >, <, >=, `var name = (30);` `name > (25)` would return `true`. `var name = ('tom');` `name == ('jerry');`
  3. Assignment - Assigns a value to the variable 
   * _Example:_  `var`, `=`,  `var class = ('code');`
 
**Built in Constants**
 1. `Undefined` - A variable that has not been assigned a value would be Undefined. 
   * _Example:_ `Trey * 8 = undefined`
 2. `NaN` -  Value of NaN is Not-A-Number. 
   * _Example:_  `x = 30 / ('dave');` Would return a value of `NaN`
 3. `Infinity` - Any positive number multiplied by `Infinity` is `Infinity`, and anything divided by `Infinity` is `0`.* _Example:_  `Infinity * 8` returns `Infinity` 

###Function -  

A `function` is composed of a sequence of statements called the `function` body.<br> 
Values can be passed to a `function`, and the `function` can return a value.<br> 
A`function` has 3 things - inputs, outputs, and sideeffects.`return` is how you get stuff out of a function. <br>
A `function` with no identifier is called an anonymous.<br>
A `function` is invoked by placing parenthesis after its identifier.<br>
 _Examples:_ `function identifier( ){ }`<br>
    /* Declare the function 'myFunc' */<br>
    function myFunc(theObject) {<br>
    theObject.brand = "Toyota";<br>
    }<br>
     //Declare variable 'mycar';<br>
     //create and initialize a new Object;<br>
     //assign reference to it to 'mycar'<br>
    var mycar = {<br>
    brand: "Honda",<br>
    model: "Accord",<br>
    year: 1998<br>
   };<br>
    /* Logs 'Honda' */<br>
 console.log(mycar.brand);<br>
 
###Operators:
 
 1. `()` The grouping operator `( )` controls the precedence of evaluation in expressions.<br>
 2. `[]` The `JavaScript Array object` is a global object that is used in the construction of arrays; which are       high-level, list-like objects.
 3. The `typeof` operator returns a string indicating the type of the unevaluated operand.<br>
 4. `var biz = function () {};` This operator allows inserting expressions that produce side effects into places where an expression that evaluates to undefined is desired. The void operator is often used merely to obtain the undefined primitive value, usually using "void(0)" (which is equivalent to "void 0"). 
 5. `;` The semicolon is a staement operator that says "do everything in that line".
 6.
 






 
  
