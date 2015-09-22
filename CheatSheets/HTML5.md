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
