function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent("sidebar", "components/sidebar.html");
loadComponent("header", "components/header.html");
loadComponent("hero", "components/hero.html");
loadComponent("footer", "components/footer.html");
loadComponent("link", "components/link.html");