# Reading CSS

## Selectors  (http://www.sitepoint.com/web-foundations/css-selectors/)

* A CSS selector is the part of a CSS rule set that actually selects the content you want to style. Let’s look at all the different kinds of selectors available, with a brief description of each.
* Universal Selector ``*``
The universal selector works like a wild card character, selecting all elements on a page.
* Element Type Selector, also referred to simply as a “type selector,” this selector must match one or more HTML elements of the same name. Thus, a selector of nav would match all HTML nav elements, and a selector of <ul> would match all HTML unordered lists, or <ul> elements.
* ID Selector: An ID selector is declared using a hash, or pound symbol (#) preceding a string of characters. The string of characters is defined by the developer. This selector matches any HTML element that has an ID attribute with the same value as that of the selector, but minus the hash symbol.
* Class Selector: The class selector is the most useful of all CSS selectors. It’s declared with a dot preceding a string of one or more characters. Just as is the case with an ID selector, this string of characters is defined by the developer. The class selector also matches all elements on the page that have their class attribute set to the same value as the class, minus the dot.
* Child Combinator: A selector that uses the child combinator is similar to a selector that uses a descendant combinator, except it only targets immediate child elements.
* General Sibling Combinator: A selector that uses a general sibling combinator matches elements based on sibling relationships. That is to say, the selected elements are beside each other in the HTML.
* Adjacent Sibling Combinator: A selector that uses the adjacent sibling combinator uses the plus symbol (+), and is almost the same as the general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling.
* Attribute Selector: The attribute selector targets elements based on the presence and/or value of HTML attributes, and is declared using square brackets. There should not be a space before the opening square bracket unless you intend to use it along with a descendant combinator.
* Pseudo-class: A pseudo-class uses a colon character to identify a pseudo-state that an element might be in—for example, the state of being hovered, or the state of being activated.
* Pseudo-element: This selector inserts an imaginary element into the page, inside the targeted element, before its contents.



### [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

* The color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element

* The text color of an element and its decorations (??)
The text-decoration-color CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by text-decoration-line.


#### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

* a hexadecimal color value: `#012345`, `#CCC`
* a color keyword: `cornflowerblue`, `purple`, `orange`
* RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
* RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
* HSL decimal notation: `hsl(0, 100%, 50%)`

## Properties
  * display: none;

  * display: inline;
  * display: block;
  * display: contents;
  * display: list-item;
  * display: inline-block;
  * display: inline-table;
  * display: table;
  * display: table-cell;
  * display: table-column;
  * display: table-column-group;
  * display: table-footer-group;
  * display: table-header-group;
  * display: table-row;
  * display: table-row-group;
  * display: flex;
  * display: inline-flex;
  * display: grid;
  * display: inline-grid;
  * display: ruby;
  * display: ruby-base;
  * display: ruby-text;
  * display: ruby-base-container;
  * display: ruby-text-container ;
  * display: run-in;

  * Global values
  * display: inherit;
  * display: initial;
  * display: unset;

###the "display" property  (http://learnlayout.com/frameworks.html)

* display is CSS's most important property for controlling layout. Every element has a default display value depending on what type of element it is. The default for most elements is usually block or inline. A block element is often called a block-level element. An inline element is always just called an inline element.

* div is the standard block-level element. A block-level element starts on a new line and stretches out to the left and right as far as it can. Other common block-level elements are p and form, and new in HTML5 are header, footer, section, and more.

* inline: span is the standard inline element. An inline element can wrap some text inside a paragraph <span> like this </span> without disrupting the flow of that paragraph. The a element is the most common inline element, since you use them for links.

* none: Another common display value is none. Some specialized elements such as script use this as their default. It is commonly used with JavaScript to hide and show elements without really deleting and recreating them.
This is different from visibility. Setting display to none will render the page as though the element does not exist. visibility: hidden; will hide the element, but the element will still take up the space it would if it was fully visible.

* Setting the width of a block-level element will prevent it from stretching out to the edges of its container to the left and right. Then, you can set the left and right margins to auto to horizontally center that element within its container. The element will take up the width you specify, then the remaining space will be split evenly between the two margins.

* Using max-width instead of width in this situation will improve the browser's handling of small windows. This is important when making a site usable on mobile. Resize this page to check it out!
    *{#main {
        max-width: 600px;
        margin: 0 auto;
      }*

* the box model: While we're talking about width, we should talk about width's big caveat: the box model. When you set the width of an element, the element can actually appear bigger than what you set: the element's border and padding will stretch out the element beyond the specified width. Look at the following example, where two elements with the same width value end up different sizes in the result.

* box-sizing: Over the generations, people realized that math is not fun, so a new CSS property called box-sizing was created. When you set box-sizing: border-box; on an element, the padding and border of that element no longer increase its width. Here is the same example as the previous page, but with box-sizing: border-box; on both elements:

* position: In order to make more complex layouts, we need to discuss the position property. It has a bunch of possible values, and their names make no sense and are impossible to remember. Let's go through them one by one, but maybe you should bookmark this page too.

* static is the default value. An element with position: static; is not positioned in any special way. A static element is said to be not positioned and an element with its position set to anything else is said to be positioned.

* relative: behaves the same as static unless you add some extra properties. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

* A fixed element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. As with relative, the top, right, bottom, and left properties are used.

* absolute: is the trickiest position value. absolute behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport. If an absolutely-positioned element has no positioned ancestors, it uses the document body, and still moves along with page scrolling. Remember, a "positioned" element is one whose position is anything except static.

###float property

* Another CSS property used for layout is float. Float is intended for wrapping text around images.

###The clear property

* The clear property is important for controlling the behavior of floats.

* percent width: Percent is a measurement unit relative to the containing block.

###media queries:

* "Responsive Design" is the strategy of making a site that "responds" to the browser and device that it is being shown on... by looking awesome no matter what.

* Media queries are the most powerful tool for doing this. Let's take our layout that uses percent widths and have it display in one column when the browser is too small to fit the menu in the sidebar:

    @media screen and (min-width:600px) {
      nav {
        float: left;
        width: 25%;
      }
      section {
        margin-left: 25%;
      }
    }
    @media screen and (max-width:599px) {
      nav li {
        display: inline;

* inline-block: You can create a grid of boxes that fills the browser width and wraps nicely. This has been possible for a long time using float, but now with inline-block it's even easier. inline-block elements are like inline elements but they can have a width and height. Let's look at examples of both approaches.

*The Hard Way (using float)

    .box {
      float: left;
      width: 200px;
      height: 100px;
      margin: 1em;
    }
    .after-box {
      clear: left
* The Easy Way (using inline-block) You can achieve the same effect using the inline-block value of the display property.

    .box2 {
      display: inline-block;
      width: 200px;
      height: 100px;
      margin: 1em;

* inline-block layout. You can also use inline-block for layouts. There are a few things to keep in mind:
inline-block elements are affected by the vertical-align property, which you probably want set to top.
You need to set the width of each column
There will be a gap between the columns if there is any whitespace between them in the HTML
    nav {
      display: inline-block;
      vertical-align: top;
      width: 25%;
    }
    .column {
      display: inline-block;
      vertical-align: top;
      width: 75%;

###column

* There is a new set of CSS properties that let you easily make multi-column text. Have a look:

    .three-column {
      padding: 1em;
      -moz-column-count: 3;
      -moz-column-gap: 1em;
      -webkit-column-count: 3;
      -webkit-column-gap: 1em;
      column-count: 3;
      column-gap: 1em;

* CSS columns are very new, so you need to use the prefixes, and it won't work through IE9 or in Opera Mini.

###fonts

* The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords.
  
  * <'font-style'>: The font-style CSS property lets you select italic or oblique faces within a font-family.

  * <'font-variant'>: The font-variant property acts as a shorthand for the longhand properties.

  * <'font-weight'>: The font-weight CSS property specifies the weight or boldness of the font. Some fonts are only available in normal and bold.

  * <'font-size'>: The font-size CSS property specifies the size of the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of the em and ex 
  <length> units. After reviewing in class though, Dave has sugested using point's = pt when refeing to font size.

  * <'line-height'>: On block level elements, the line-height property specifies the minimum height of line boxes within the element. On non-replaced inline elements, line-height specifies the height that is used to calculate line box height. On replaced inline elements such as buttons or other input element, line-height has no effect. 

  * <'font-family'>: The font-family CSS property lets you specify a prioritized list of font family names and/or generic family names for the selected element. Values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer or that can be downloaded using a @font-face at-rule.

  ###text

  * text-align: The text-align CSS property describes how inline content like text is aligned in its parent block element. text-align does not control the alignment of block elements itself, only their inline content.

  * text-decoration: The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink. Underline and overline decorations are positioned under the text, line-through over it.Text decorations draw across descendant elements. This means that it is not possible to disable on a descendant a text decoration that is specified on one of its ancestors. For example, in the markup: <p>This text has <em>some emphasized words</em> in it.</p>, the style rule: p { text-decoration: underline } would cause the entire paragraph to be underlined. The style rule: em { text-decoration: none } would not cause any change; the entire paragraph would still be underlined. However, the rule em { text-decoration: overline } would cause a second decoration to appear on "some emphasized words".

  * text-transform: The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.

  * text-shadow: The text-shadow property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and text-decorations of the element.

  ###line

  * The text-decoration-line CSS property sets what kind of line decorations are added to an element. Underline decorations are positioned under the text, overline decorations are positioned above the text, and line-through  decorations are positioned through the middle of the text.

    * Examples: 
      * /* Keyword values */
      text-decoration-line: none;
      text-decoration-line: underline;
      text-decoration-line: overline;
      text-decoration-line: line-through;
      text-decoration-line: underline overline;                
      text-decoration-line: overline underline line-through;
      * /* Global values */
      text-decoration-line: inherit;
      text-decoration-line: initial;
      text-decoration-line: unset;
  
  ###color

  * The <color> CSS data type denotes a color in the sRGB color space. A color can be described in any of these ways:
    using a keyword
    using the RGB cubic-coordinate system (via the #-hexadecimal or the rgb() and rgba() functional notations)
    using the HSL cylindrical-coordinate system (via the hsl() and hsla() functional notations)




