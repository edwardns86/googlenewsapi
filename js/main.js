let news = [];
let pageNum = 1;
let newsArticles = [];
// lines 6 - 19 will display the date in the format and language of someone vietnamese if their computer has this language set

const addScript = language => {
    let s = document.createElement("script");
    s.setAttribute(   //Search using moment cdn for the .js file url
        "src",
        `https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/${language}.js`
    );
    document.body.appendChild(s)
};

const userLanguage =
    window.clientInformation.language
if (userLanguage == 'vi') {
    addScript('vi')
}

async function fetchNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=93c080c8d2af499babe792960764acd3&page=${pageNum}`;
    let result = await fetch(url);
    let data = await result.json();
    console.log("news data", data.articles[0])

    newsArticles = newsArticles.concat(data.articles)
    renderNews(newsArticles);
    filterNewsSource(newsArticles)
    document.getElementById('numberofarticles').innerHTML = `<p>Current Articles: ${newsArticles.length}</p>` // renders article count
    pageNum++
};

function renderNews(arr) {

    const html = arr.map((article, ) => {
        if (article.urlToImage === null) return
        return `
        <div class="row news-border spacer">
        <div id="news" class="col-6 d-flex align-items-center">
            <div id="newsitem">
                <img class="img-thumbnail news-border-image"
                    src="${article.urlToImage}"
                    alt="news image">
            </div>
        </div>
        <div class="col">
            <h2 id="headline">${stripHtml(article.title.split('-')[0])}</h2>
            <p id="tagline">${stripHtml(article.description)}</p>
            <p id="content">${stripHtml(article.content)}</p>
            <p id="source">sourced from:${stripHtml(article.source.name)}</p>
            <p id="published-on">${moment(article.publishedAt).calendar()} </p>
            <a href="${article.url}" target="_blank">read in full</a>
        </div>
    </div>
        `
    })


    document.getElementById('latest').innerHTML = html.join('');

}

const filterNewsSource = (articles) => {
    let sources = [];
    articles.map(a => {
        if (!sources.includes(a.source.name)) {
            sources.push(a.source.name)
        }
    })

   displaySources(sources)
    
}

const displaySources = (arr) => {
    const html = arr.map(sourceName => {
    return `
        <li>${sourceName.split('.')[0]} <input type="checkbox" data-toggle="toggle"  checked></li>
        `
})
    document.getElementById("news-source-checkbox").innerHTML = html.join('');

}


fetchNews()

function stripHtml(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}



