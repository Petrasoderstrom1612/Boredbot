document.getElementById("bored-bot").addEventListener("click", getIdea)


function getIdea() {
    fetch("https://boringapi.com/api/v1/photos?page=2&limit=20&sort_by=file_size&sort_order=desc")
    .then(res => res.json())
    .then(data => {
            let randomIndex = 0
            for (let i=0; i<data.photos.length; i++) {
                randomIndex = Math.floor(Math.random() * data.photos.length)
            }

            document.body.classList.add("fun")
            document.getElementById("idea").innerHTML = `<img src=${data.photos[randomIndex].url} alt=${data.photos[0].url} />`
            document.getElementById("title").textContent = "🦾 Do you want a new one?🦿"
        })
}