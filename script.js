const articlePreview = document.querySelector(".article-preview")

articlePreview.addEventListener("click", e => {
    if (!e.target.matches(".shareButton")) return
    toggleShareDisplays()    
})

function toggleShareDisplays() {
    const shareDisplay = document.querySelector(".article-preview__share")
    const normalDisplay = document.querySelector(".article-preview__profile")

    shareDisplay.classList.toggle("hidden")
    normalDisplay.classList.toggle("hidden")

}