document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("div.disclaimer").remove();
    let styles = document.querySelectorAll("style");
    if (styles.length > 1) styles[1].remove();
});