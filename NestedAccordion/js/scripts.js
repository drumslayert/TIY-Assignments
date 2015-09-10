/* SO after inspecting all the different elements inside the hmtl and seeing how
this is laid out, theres not a whole lot to it in theory. I would think you
could do this with 2 or 3 functions at the most.

Theres one big div class="main" container wraping this entire accordian.
With one big ul that contains 5 li 's, that each contain their own h3 class header,
another div which also contains another smaller ul which contains 3 li 's
nested inside, which also happen to contain 3- h4 header classes each with their very
own little div class.

I would start by defining a function that will hide the content away and keep it
hidden until the user clicks on it. a.k.a. what this class cbp-ntopen is doing this
on this site when the <h3 class="cbp-nttrigger"> is clicked. It's calling the class
cbp-ntopen which should be a function invoked to do its job. Bassically all of
the h3 and h4 ellements have this class of cbp-nttrigger.

So I would define a function, identified as cbp-ntopen, that executes when
invoked by cbp-nttrigger calling it, which is invoked when the user clicks on it.
What that function would also have to do is talk with the css class thats styling
that specific content areas we need and telling to hide or not hide this content ,
which in this case woud be cbp-ntcontent classes.

a few javascript funcions/methods I found that could probably help us achieve
this are as follows:

getElementsByClassName()
ul.childNodes
element.onclick = functionRef;


*/

//I found this searching around something like this may be of use to tell the css to
//display or not display the content.

/* function toggle_visibility(id) {
var e = document.getElementById(id);
e.style.display = ((e.style.display!='none') ? 'none' : 'block');
}
*/

/*function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }
*/
