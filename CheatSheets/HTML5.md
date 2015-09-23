## `<html>`

the main enchilada, the whole `document`, that which wraps all the others... except for [`<!DOCTYPE>`](#doctype), for some reason. HTML, which stands for HyperText Markup Language, is the most basic building block of a webpage and used for creating and visually representing a webpage. It determines the content of a webpage , but not its functionality.


* _parents_: none, it's the top
* _content_: _only_ [`<head>`](#head) and [`<body>`](#body)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!
  * A block-level element occupies the entire space of its parent element (container), thereby creating a "block.
  *  An inline element occupies only the space bounded by the tags that define the inline element.

![Special HTML character sets](http://www.xs4all.nl/~dimaroan/htl/latin1.gif)

###what rules does a tag follow?
      ```<html>
    <head>
    <title>Uppercase tags and attributes</title>
    </head>
    <body>
    <p>HTML is cool</p>
    <br />
    <a href="http://www.yahoo.com" target="_blank">Yahoo search engine</a>
    </body>
    </html>
      ```
###DOCTYPE

*  DocType tells web browsers what kind of HTML your page is using.

### Attributes



* `class` -- a space-separated list of category names
* . . .

. . .

## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1], palpable content (WTF?)
* _display_: `block`

. . .


###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)

###ul

 * The HTML unordered list element ```(<ul>)``` represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.
###ol
  * ```
      <ul>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
    </ul>
   ```

* The HTML ```<ol>``` Element (or HTML Ordered List Element) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets.
 * ```
 <ol>
<li>first item</li>
<li>second item</li>
<li>third item</li>
</ol>
```


I found the followingsite to have some helpul things on html (http://www.instructables.com/howto/html/)
###Basic Tags
```
  <html></html>
  Creates an HTML document
  <head></head>
  Sets off the title and other information that isn't displayed on the Web page itself
  <body></body>
  Sets off the visible portion of the document
 <title></title>
 Puts the name of the document in the title bar
```
###dl

  * The HTML ```<dl>``` Element (or HTML Description List Element) encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
    * ```
      <dl>
      <dt>Firefox</dt>
      <dd>A free, open source, cross-platform, graphical web browser
          developed by the Mozilla Corporation and hundreds of volunteers.</dd>

      <!-- other terms and definitions -->
      </dl>
      ```


###Text Tags
  ```
  <pre></pre>
  Creates preformatted text
  <hl></hl>
  Creates the largest headline
  <h6></h6>
  Creates the smallest headline
  <b></b>
  Creates bold text
  <i></i>
  Creates italic text
  <tt></tt>
  Creates teletype, or typewriter-style text
  <cite></cite>
  Creates a citation, usually italic
  <em></em>
  Emphasizes a word (with italic or bold)
  <strong></strong>
  Emphasizes a word (with italic or bold)
  <font size=?></font>
  Sets size of font, from 1 to 7)
  <font color=?></font>
  Sets font color, using name or hex value
  ```
###Links
  ```
  <a href="URL"></a>
  Creates a hyperlink
  <a href="mailto:EMAIL"></a>
  Creates a mailto link
  <a name="NAME"></a>
  Creates a target location within a document
  <a href="#NAME"></a>
  Links to that target location from elsewhere in the document
  ```
  ###Formatting
  ```
  <p></p>
  Creates a new paragraph
  <p align=?>
  Aligns a paragraph to the left, right, or center
  <br>
  Inserts a line break
  <blockquote>
  </blockquote>
  Indents text from both sides
  <dl></dl>
  Creates a definition list
  <dt>
  Precedes each definition term
  <dd>
  Precedes each definition
  <ol></ol>
  Creates a numbered list
  <li></li>
  Precedes each list item, and adds a number
  <ul></ul>
  Creates a bulleted list
  <div align=?>
  A generic tag used to format large blocks of HTML, also used for stylesheets
  ```

###Graphical Elements
  ```
  <img src="name">
  Adds an image
  <img src="name" align=?>
  Aligns an image: left, right, center; bottom, top, middle
  <img src="name" border=?>
  Sets size of border around an image
  <hr>
  Inserts a horizontal rule
  <hr size=?>
  Sets size (height) of rule
  <hr width=?>
  Sets width of rule, in percentage or absolute value
  <hr noshade>
  Creates a rule without a shadow
  ```

###Tables
  ```
  <table></table>
  Creates a table
  <tr></tr>
  Sets off each row in a table
  <td></td>
  Sets off each cell in a row
  <th></th>
  Sets off the table header (a normal cell with bold, centered text)
  ```
###Table Attributes
  ```
  <table border=#>
  Sets width of border around table cells
  <table cellspacing=#>
  Sets amount of space between table cells
  <table cellpadding=#>
  Sets amount of space between a cell's border and its contents
  <table width=# or %>
  Sets width of table  in pixels or as a percentage of document width
  <tr align=?> or <td align=?>
  Sets alignment for cell(s) (left, center, or right)
  <tr valign=?> or <td valign=?>
  Sets vertical alignment for cell(s) (top, middle, or bottom)
  <td colspan=#>
  Sets number of columns a cell should span
  <td rowspan=#>
  Sets number of rows a cell should span (default=1)
  <td nowrap>
  Prevents the lines within a cell from being broken to fit
  ```
###Frames
  ```
  <frameset></frameset>
  Replaces the <body> tag in a frames document; can also be nested in other framesets
  <frameset rows="value,value">
  Defines the rows within a frameset, using number in pixels, or percentage of w idth
  <frameset cols="value,value">
  Defines the columns within a frameset, using number in pixels, or percentage of width
  <frame>
  Defines a single frame  or region  within a frameset
  <noframes></noframes>
  Defines what will appear on browsers that don't support frames
  ```
###Frames Attributes
  ```
  <frame src="URL">
  Specifies which HTML document should be displayed
  <frame name="name">
  Names the frame, or region, so it may be targeted by other frames
  <frame marginwidth=#>
  Defines the left and right margins for the frame; must be equal to or greater than 1
  <frame marginheight=#>
  Defines the top and bottom margins for the frame; must be equal to or greater than 1
  <frame scrolling=VALUE>
  Sets whether the frame has a scrollbar; value may equal "yes," "no," or "auto." The default, as in ordinary documents, is auto.
  <frame noresize>
  Prevents the user from resizing a frame
  ```
###Forms
  ```
  For functional forms, you'll have to run a CGI script. The HTML just creates the appearance of a form.
  <form></form>
  Creates all forms
  <select multiple name="NAME" size=?></select>
  Creates a scrolling menu. Size sets the number of menu items visible before you need to scroll.
  <option>
  Sets off each menu item
  <select name="NAME"></select>
  Creates a pulldown menu
  <option>
  Sets off each menu item
  <textarea name="NAME" cols=40 rows=8>
  ```
