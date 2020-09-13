let slideIndex = 0;
carousel();

function carousel() {
    const rawListItems = document.getElementsByClassName("bio-code")[0].getElementsByClassName("code-lang");
    for (var i = 0; i < rawListItems.length; i++) {
        rawListItems[i].style = "display: none;";
    }
    slideIndex++;
    if (slideIndex > rawListItems.length) {
        slideIndex = 1;
    }
    rawListItems[slideIndex - 1].style.display = "flex";
    setTimeout(carousel, 1000);
}