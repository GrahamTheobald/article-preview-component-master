const articlePreview = document.querySelector(".article-preview")

articlePreview.addEventListener("click", e => {
    if (!e.target.matches(".shareButton")) return
    toggleShareDisplays()    
})

function toggleShareDisplays() {
    const shareDisplay = document.querySelector(".article-preview__share")
    shareDisplay.classList.toggle("hidden")

    if (window.matchMedia('screen and (max-width:776px)').matches) return
    shareButtons = document.querySelectorAll(".shareButton")
    shareButtons.forEach(button => button.classList.toggle("hidden"))
    document.querySelector(".article-preview__profile__right").classList.toggle("darkBlue")
}