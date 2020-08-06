let menuOpen = false;
let menuItemsContainer, menuItems, menuToggleButton, menuBackgroundOverlay;

window.onload = function() {
  menuItemsContainer = document.getElementById("menu-options-container");
  menuItems = menuItemsContainer.getElementsByClassName("menu__option");
  menuToggleButton = document.getElementById("menu-toggle-button");
  menuBackgroundOverlay = document.getElementById("menu-background-overlay");

  for (let i = 0; i < menuItems.length; ++i) {
    let transitionTime = ((0.4 - i / 20) * i).toString();
    let transitionText = "top " + transitionTime + "s cubic-bezier(0.34, 1.56, 0.64, 1), opacity " + transitionTime + "s cubic-bezier(0.34, 1.56, 0.64, 1)";
    
    menuItems[i].style.transition = transitionText;
  }
};


function toggleMenu(){
  if (menuOpen){
    for (let i = 0; i < menuItems.length; ++i) {
      menuItems[i].style.top = "0px";
      menuItems[i].style.opacity = "0";

      //Sets the transition for when the menu next closes.
      let transitionTime = (0.3 * i).toString();
      let transitionText = "top " + transitionTime + "s cubic-bezier(0.68, -0.6, 0.32, 1.6), opacity " + transitionTime + "s cubic-bezier(0.68, -0.6, 0.32, 1.6)";
      
      menuItems[i].style.transition = transitionText;
    }

    menuToggleButton.innerHTML = '<i class="fontello-icon menu__burger-icon">&#xe804;</i>MENU';
    menuBackgroundOverlay.style.opacity = "0%";
    menuBackgroundOverlay.style.zIndex = "-2";

    menuBackgroundOverlay.style.transition = "opacity 1s ease-in, z-index 0.001s linear 1s";
    

  } else {
    for (let i = 0; i < menuItems.length; ++i) {
      menuItems[i].style.top = (i * 60).toString() + "px";
      menuItems[i].style.opacity = "100%";
      
      let transitionTime = ((0.4 - i / 20) * i).toString();
      let transitionText = "top " + transitionTime + "s cubic-bezier(0.34, 1.56, 0.64, 1), opacity " + transitionTime + "s cubic-bezier(0.34, 1.56, 0.64, 1)";
      
      menuItems[i].style.transition = transitionText;

      menuToggleButton.innerHTML = '<i class="fontello-icon menu__close-icon">&#xe805;</i>';
    }

    menuBackgroundOverlay.style.opacity = "80%";
    menuBackgroundOverlay.style.zIndex = "2";

    
    menuBackgroundOverlay.style.transition = "opacity 0.8s ease-out";
  }

  menuOpen = !menuOpen;
}