
/* SO after inspecting all the different elements inside the hmtl and seeing how
this is laid out, theres one big div class="main" container wraping this entire accordian.
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


// var isOpen = false; //when the page opens, cbp-ntopen is naturally closed or not accesed.
// var isClosed = document.querySelector(".cbp-nttrigger"); //isClosed is targeting the class .cbp-nttrigger
// isClosed.addEventListener('click', function(){ //.addEventListener is listening for when its clicked on
//   if (isOpen){
//     document.querySelector("li").className = "";//when cbp-ntopen is not called, cbp-nttrigger is closed
//     isOpen = false;
//   }  else {                                    //when cbp-ntopen is called, cbp-nttrigger is open
//     document.querySelector("li").className = "cbp-ntopen";
//     isOpen = true;
//   }
// alert("click");
// });

/*
var list = document.querySelectorAll(".cbp-nttrigger");//creating a list of all cbp-nttrigger
for (var i = 0; i < list.length; ++i){// itterating over the list
  list[i].addEventListener('click', function(){//adding a listener to each trigger found in the list
if (this.parentNode.className=="cbp-ntopen"){//wherever cbp-nttrigger is clicked, if its parents
  this.parentNode.className=""//classname is == cbp-ntopen then change it to ""
}  else {
  this.parentNode.className="cbp-ntopen"// if it's parents classname is not cbp-ntopen then make it that.
}  // end else                                   //
});// ending function inside addEventListener
}// ending for loop
*/
//alert('im working');
/*
$("section h2").click(function(){
alert("HELLO WORLD!");
});
*/
/*
$(document).ready(function(){
  $("p, h3").hide(); //after 5 hours of banging my head I finally got soemthing to hide when I told it!!!
  $("h2").click(function(){ //heck yes I got the content to show when I clicked on the h2!!
     $("p").show.();
     $("h2").click(function(){
        $("p").hide();
     }); // OK, so the click works only one time each! Time to refactor and make it work everytime.
  });
});
*/

$(document).ready(function(){
  $("p, h3").hide();
  $("h2").css({"cursor":"pointer"});
  $("h2").on('click',function(){
     $("p").slideToggle();//lol all I nedded all this time was a .toggle
//well I swicthed to a .slideToggle because it looks nicer to me.
  });
});




//  $(this).next().show('highlight', 1000);









//     heading = document.querySelector(".cbp-nttrigger");
//     heading.addEventListener("click", function(){
//     document.querySelector("li").className = "cbp-ntopen";
// });
