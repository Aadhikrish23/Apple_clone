
function addMenuListeners(linkId, menuClass) {
  var link = document.getElementById(linkId);
  var menu = document.querySelector(menuClass);

  function showMenu() {
    menu.style.maxHeight = menu.scrollHeight + "px";
  }

  function hideMenu() {
    menu.style.maxHeight = "0";
  }

  link.addEventListener("mouseover", showMenu);
  link.addEventListener("mouseout", hideMenu);

  menu.addEventListener("mouseover", showMenu);
  menu.addEventListener("mouseout", hideMenu);
}


addMenuListeners("store-link", ".store");
addMenuListeners("mac-link", ".mac");
addMenuListeners("ipad-link", ".ipad");
addMenuListeners("iphone-link",".iphone");
addMenuListeners("watch-link", ".watch");
addMenuListeners("airpods-link", ".airpods");
addMenuListeners("tvandhome-link", ".tvandhome");
addMenuListeners("entertainment-link", ".entertainment");
addMenuListeners("accessories-link", ".accessories");
addMenuListeners("support-link", ".support");


var hoverElement = document.querySelector('.menubar_hidden');
var previousElement = hoverElement.previousElementSibling;

hoverElement.addEventListener('mouseover', function() {
  previousElement.classList.add('highlight');
});

hoverElement.addEventListener('mouseout', function() {
  previousElement.classList.remove('highlight');
});
// for search and cart
function setupMenuToggle(linkId, menuSelector, maxHeight) {
  var link = document.getElementById(linkId);
  var menuSection = document.querySelector(menuSelector);

  link.addEventListener("click", function() {
    if (menuSection.classList.contains("visible")) {
      menuSection.style.maxHeight = "0";
      menuSection.classList.remove("visible");
    } else {
      menuSection.style.maxHeight = maxHeight;
      menuSection.classList.add("visible");
    }
  });

  menuSection.addEventListener("mouseleave", function() {
    menuSection.style.maxHeight = "0";
    menuSection.classList.remove("visible");
  });
}

setupMenuToggle("search-link", ".search", "500px");
setupMenuToggle("cart-link", ".cart", "500px");


