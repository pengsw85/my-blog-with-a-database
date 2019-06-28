const blogs = document.querySelectorAll("button.hidden");

for (let blog of blogs) {
    const buttondiv = blog.parentElement.parentElement.parentElement
    buttondiv.addEventListener("mouseover", (e)=> {
        blog.classList.remove("hidden")
    })
    buttondiv.addEventListener("mouseout", (e)=> {
        blog.classList.add("hidden")
    })
}
