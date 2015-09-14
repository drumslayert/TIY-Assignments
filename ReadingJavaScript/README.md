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


###DOM

* The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document (a tree) and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content. The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods. Nodes can also have event handlers attached to them, and once that event is triggered the event handlers get executed. Essentially, it connects web pages to scripts or programming languages.

###HTML interfaces

* A document containing HTML is described using the HTMLDocument interface. Note that the HTML specification also extends the Document interface.

* An HTMLDocument object also gives access to browser features: the tab, or window, in which a page is drawn using the Window interface, the Style associated to it (usually CSS), the history of the browser relative to the context, History , eventually a Selection done on the document.

###window Object

* The window object represents a window containing a DOM document; the document property points to the DOM document loaded in that window. A window for a given document can be obtained using the document.defaultView property.
 The window object implements the Window interface, which in turn inherits from the AbstractView interface. Some additional global functions, namespaces, objects, interfaces, and constructors, not typically associated with the window, but available on it, are listed in the JavaScript Reference and DOM Reference.

 ###history

 * The Window.history read-only property returns a reference to the History object, which provides an interface for manipulating the browser session history (pages visited in the tab or frame that the current page is loaded in).

 * `var historyObj = window.history;`<br>
 * `history.back();     // equivalent to clicking back button`<br>
 * `history.go(-1);     // equivalent to history.back();`<br>

 ###Alert

 * The Window.alert() method displays an alert dialog with the optional specified content and an OK button.
 * `window.alert(message);`<br>

 ###confirm

* The Window.confirm() method displays a modal dialog with an optional message and two buttons, OK and Cancel.
* `result = window.confirm(message);`<br>

###closed

* This read-only property indicates whether the referenced window is closed or not.  `isClosed = windowRef.closed;`

###opener

* Returns a reference to the window that opened this current window. `objRef = window.opener;`

###location

* The Window.location read-only property returns a Location object with information about the current location of the document. Though Window.location is a read-only Location object, you can also assign a DOMString to it. This means that you can work with location as if it were a string in most cases: location = 'http://www.example.com' is a synonym of location.href = 'http://www.example.com'.<br>

* `var oldLocation = location;`<br>
 `location = newLocation;`<br>

###document

* Returns a reference to the document contained in the window. `doc = window.document`<br>
* Each web page loaded in the browser has its own document object. The Document interface serves as an entry point into the web page's content (the DOM tree, including elements such as <body> and <table>) and provides functionality which is global to the document (such as obtaining the page's URL and creating new elements in the document).

###HTMLElement

* The HTMLElement interface represents any HTML element. Some elements directly implement this interface, others implement it via an interface that inherits it.
* The Element.innerHTML property sets or gets the HTML syntax describing the element's descendants.
`var content = element.innerHTML;`<br>


###node

* A Node is an interface from which a number of DOM types inherit, and allows these various types to be treated (or tested) similarly.


###addEventListener

* The EventTarget.addEventListener() method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.

* The Event interface represents any event of the DOM. It contains common properties and methods to any event.


###bubble

* Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

* With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

* With capturing, the event is first captured by the outermost element and propagated to the inner elements.

* Capturing is also called "trickling", which helps remember the propagation order:

* bubble up, trickle down.


###Event targeting

* Identifies the current target for the event, as the event traverses the DOM. It always refers to the element the event handler has been attached to as opposed to event.target which identifies the element on which the event occurred.

* Example
event.currentTarget is interesting to use when attaching the same event handler to several elements.

* function hide(e){
  e.currentTarget.style.visibility = "hidden";
  // When this function is used as an event handler: this === e.currentTarget
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i < ps.length; i++){
  ps[i].addEventListener('click', hide, false);
}

// click around and make paragraphs disappear

###click

* The `click` event is fired when a pointing device button (usually a mouse button) is pressed and released on a single element.

###scroll

* The scroll event is fired when the document view or an element has been scrolled.
    ;(function() {
        var throttle = function(type, name, obj) {
            var obj = obj || window;
            var running = false;
            var func = function() {
                if (running) { return; }
                running = true;
                requestAnimationFrame(function() {
                    obj.dispatchEvent(new CustomEvent(name));
                    running = false;
                });
            };
            obj.addEventListener(type, func);
        };

        /* init - you can init any event */
        throttle ("scroll", "optimizedScroll");
    })();

    // handle event
    window.addEventListener("optimizedScroll", function() {
        console.log("Resource conscious scroll callback!");
    });

###change

* The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user. Unlike the input event, the change event is not necessarily fired for each change to an element's value.

###submit

* The submit event is fired when a form is submitted. Note that submit is fired only on the form element, not the button or submit input.

###load

* The load event is fired when a resource and its dependent resources have finished loading.

###unload

* The unload event is fired when the document or a child resource is being unloaded.

It is fired after:

    beforeunload (cancellable event)
    pagehide

    <!DOCTYPE html>
    <html>
      <head>
        <title>Parent Frame</title>
        <script>
          window.addEventListener('beforeunload', function(event) {
            console.log('I am the 1st one.');
          });
          window.addEventListener('unload', function(event) {
            console.log('I am the 3rd one.');
          });
        </script>
      </head>
      <body>
        <iframe src="child-frame.html"></iframe>
      </body>
    </html>

<<<<<<< HEAD
    //Below, the content of child-frame.html:
=======
<<<<<<< HEAD
=======

>>>>>>> 53cd64e683f898b059ac5da65197ca389825cf4e
>>>>>>> master

        <!DOCTYPE html>
    <html>
      <head>
        <title>Child Frame</title>
        <script>
          window.addEventListener('beforeunload', function(event) {
            console.log('I am the 2nd one.');
          });
          window.addEventListener('unload', function(event) {
            console.log('I am the 4th and last one…');
          });
        </script>
      </head>
      <body>
          ☻
      </body>
    </html>

###Why use addEventListener?

* addEventListener is the way to register an event listener as specified in W3C DOM. Its benefits are as follows:

* It allows adding more than a single handler for an event. This is particularly useful for DHTML libraries or Mozilla extensions that need to work well even if other libraries/extensions are used.
It gives you finer-grained control of the phase when the listener gets activated (capturing vs. bubbling)
* It works on any DOM element, not just HTML elements.
