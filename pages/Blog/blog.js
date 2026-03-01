// Simple Read More Alert
document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        alert("Full blog page coming soon!");
    });
});