const articlePreview = document.querySelector(".article-preview")

articlePreview.addEventListener("click", e => {
    if (!e.target.matches(".shareButton")) return
    toggleShareDisplays()    
})

function toggleShareDisplays() {
    const shareDisplay = document.querySelector(".article-preview__share")

    shareDisplay.classList.toggle("hidden")

}