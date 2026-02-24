document.addEventListener("click", function(e) {

    if (e.target.id === "toggleBtn" || e.target.id === "headerToggle") {

        const sidebar = document.getElementById("sidebarContainer");
        const mainWrapper = document.querySelector(".main-wrapper");
        const header = document.querySelector(".top-header");

        sidebar.classList.toggle("collapsed");

        if (sidebar.classList.contains("collapsed")) {
            mainWrapper.style.marginLeft = "70px";
            header.style.left = "70px";
        } else {
            mainWrapper.style.marginLeft = "220px";
            header.style.left = "220px";
        }
    }

});