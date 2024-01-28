// Captura as ID
const navigationMenu = document.getElementById('navbar-content');
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

// Aparece o menu ao clicar no botão
menuIcon.addEventListener("click", () => {
    menuIcon.style.display = "none";
    navigationMenu.style.display = "flex";
    navigationMenu.style.flexDirection = "column"
    navbar.style.display = "flex";
    navbar.style.flexDirection = "column";
    navbar.style.justifyContent = "center";
    navbar.style.alignItems = "center";
    navbar.style.textAlign = "center";
    navbar.style.height = "12rem"
});

// Retoma ao normal ao clicar fora do botão
document.addEventListener("click", (event) =>{
    const isClickedInsideMenu = navigationMenu.contains(event.target);
    const isClickOnMenu = menuIcon.contains(event.target);

    if (!isClickedInsideMenu && !isClickOnMenu) {
        menuIcon.style.display = "";
        navbar.style.display = "";
        navbar.style.flexDirection = "";
        navbar.style.justifyContent = "";
        navbar.style.alignItems = "";
        navbar.style.textAlign = "";
        navbar.style.height = ""
        navigationMenu.style.display = "";
        navigationMenu.style.flexDirection = ""
    }
});
