let menu = document.querySelector('menu-bars');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
}
var MenuItems = document.getElementById("MenuItems");

        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
          if(MenuItems.style.maxHeight == "0px")
        {
          MenuItems.style.maxHeight = "200px";
        }
        else
        {
          MenuItems.style.maxHeight = "0px";
        }
        }
