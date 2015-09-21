// (function (window) {
// 	'use strict';
//
// 	// Your starting point. Enjoy the ride!
//
// })(window);

// User Stories
// I can add a task to my todo list so that I can remember to do it later.

/* var list = document.querySelectorAll(".new-todo");
for (var i = 0; i < list.length; ++i){   //wasnt sure this was going to work at all so I decided to go another route
  list[i].addEventListener("onkeydown", function(){  */

var input = document.getElementsByClassName(".new-todo")
  this.addEventListener("change", function() {
    console.log(input);
});
// 
// The best I could get was my console.log to return an empty string.



/*  $(".new-todo").keydown(function() {
    console.log('testing jquery');
  });
*/  //just messing around a little bit with jquery


//
// I can edit a task on my todo list so that I can correct typos.
//
//
//
//
//
// I can mark a task as complete so that I remember that I have done it.
//
//
//
//
// I can mark a completed task as incomplete so that I actually complete it this time.
//
//
//
//
// I can delete a task from my todo list so that I don't have to see it any more.
//
//
//
//
// I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
//
//
//
//
// I can filter the list of tasks so that I can see just what tasks I have completed and what are left to do.
