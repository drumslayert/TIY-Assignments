// inside of the <div id="cbp-vm" class="cbp-vm-switcher. Depending on which class you add
// between cbp-vm-view-list and cbp-vm-view-grid. It calls the link with the view you
// slected. Inside the <div class="cbp-vm-options"> whichever link adds in the cbp-vm-selcted
// is the link used to associate with the grid view or list view.
//  <a class="cbp-vm-icon cbp-vm-grid" data-view="cbp-vm-view-grid" href="#">Grid View</a>
//  <a class="cbp-vm-icon cbp-vm-list cbp-vm-selected" data-view="cbp-vm-view-list" href="#">List View</a>


// function switchview(){
//   if (// div a class="cbp-vm-icon cbp-vm-list" is selected){
//  return cbp-vm-switcher add class cbp-vm-view-list
//  }
//   if (// div a class="cbp-vm-icon cbp-vm-grid" is selected){
//       return  cbp-vm-switcher add class cbp-vm-view-grid
//   }
// }

var list = document.querySelectorAll(".cbp-vm-options");//make a list of cbp-vm-options
for (var i = 0; i < list.length; ++i){ //iterate over that list
  list[i].addEventListener("click", function(){//take every cbp-vm-options in that list and add a listener to it
  if(this.parentNode.className==".cbp-vm-view-list"){//when a cbp-vm-options is clicked on, from that location, if it's
    this.parentNode.className=".cbp-vm-view-grid";//parent has a className == cbp-vm-view-list, then assign it cbp-vm-view-grid.
  } else if(this.parentNode.className==".cbp-vm-view-grid"){// otherwise do the oppsoite
    this.parentNode.className=".cbp-vm-view-list";
  //alert("click");
}//end if                        //this code partially works but I couldnt get it to switch back 
});//ending function
}//ending for loop
