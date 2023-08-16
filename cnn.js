const apiKey = '92490f173111430d9418394ee7a71cfb'
const grid = document.querySelector('.grid')


const getData = async() => {
    const data = await fetch(`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${apiKey}`)
    const res = await data.json()
    res.articles.map(obj => {
        const img = document.createElement('div')
        const title = document.createElement('p')
        const imgElement = document.createElement('img')
        const link = document.createElement('a')
        const desp = document.createElement('p')
        desp.classList.add('desp')
        desp.textContent = obj.description
        link.href = obj.url
        link.textContent = `${obj.title}.`
        title.classList.add("title")
        img.classList.add("img")
        imgElement.src = obj.urlToImage
        title.appendChild(link)
        title.appendChild(desp)
        img.appendChild(imgElement)
        img.appendChild(title)
        grid.appendChild(img)
    })
}

getData()