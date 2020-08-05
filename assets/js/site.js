let menuOpen = false, menuItemsContainer, menuItems;

window.onload = function() {
  menuItemsContainer = document.getElementById("menu-options-container");
  menuItems = menuItemsContainer.getElementsByClassName("menu__option");

  for (let i = 0; i < menuItems.length; ++i) {
    let transitionTime = ((0.4 - i / 20) * i).toString();
    let transitionText = "top " + transitionTime + "s cubic-bezier(0.34, 1.56, 0.64, 1), opacity " + transitionTime + "s cubic-bezier(0.34, 1.56, 0.64, 1)";
    
    menuItems[i].style.transition = transitionText;
  }

  console.log("Window loaded.")
};


function toggleMenu(){
  console.log("Function called.");
  if (menuOpen){
    for (let i = 0; i < menuItems.length; ++i) {
      menuItems[i].style.top = "0px";
      menuItems[i].style.opacity = "0";

      //Sets the transition for when the menu next closes.
      let transitionTime = (0.3 * i).toString();
      let transitionText = "top " + transitionTime + "s cubic-bezier(0.68, -0.6, 0.32, 1.6), opacity " + transitionTime + "s cubic-bezier(0.68, -0.6, 0.32, 1.6)";
      
      menuItems[i].style.transition = transitionText;
    }
  } else {
    for (let i = 0; i < menuItems.length; ++i) {
      menuItems[i].style.top = (i * 60).toString() + "px";
      menuItems[i].style.opacity = "100%";
      
      let transitionTime = ((0.4 - i / 20) * i).toString();
      let transitionText = "top " + transitionTime + "s cubic-bezier(0.34, 1.56, 0.64, 1), opacity " + transitionTime + "s cubic-bezier(0.34, 1.56, 0.64, 1)";
      
      menuItems[i].style.transition = transitionText;
    }
  }

  menuOpen = !menuOpen;
}