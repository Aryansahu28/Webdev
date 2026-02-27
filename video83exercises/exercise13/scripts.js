function smoothScrollToTop() {
    document.body.classList.add("scrolling-effect")

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    setTimeout(() => {
        document.body.classList.remove("scrolling-effect")
    }, 800)
}