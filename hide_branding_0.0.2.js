document.addEventListener("DOMContentLoaded", function (event) {
    let brandingDiv = document.querySelector('body > div:last-of-type');
    if (brandingDiv.firstChild.title.includes("Hosted on free web hosting 000webhost.com")) {
        brandingDiv.remove();
    }

    let brandingScript = document.querySelector('body > script:last-of-type');
    if (brandingScript.innerText.includes("www.hostinger.com")) {
        brandingScript.remove();
    }
});
