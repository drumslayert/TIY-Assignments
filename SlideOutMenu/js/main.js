$( ".sliders a" ).click(function() { //this sets a click event on the nav links
// console.log("clicked on link");
$(this).addClass("active"); //wherever this click happens apply the class of active
// console.log($(this).attr("href"));
// give me the value of this href
$($(this).attr("href")).slideToggle("active").siblings().slideUp("active");
}); //now toggle the class of active on that value and also removeClass active of its siblings

// <i class="fa fa-sort-asc"></i>
//  $(this).addClass("fa fa-sort-asc");
// .removeClass("fa fa-sort-desc")
