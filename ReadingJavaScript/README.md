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










