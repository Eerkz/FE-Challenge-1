
//get elements
const container = document.querySelector('.info-cont');
const headerTitle = document.querySelectorAll('.header-title');
const headerAuthor = document.querySelector('.header-author');
const headerDate = document.querySelector('.header-date');
const img = document.querySelectorAll('img');
const cardTitle = document.querySelectorAll('.card-title');
const description = document.querySelectorAll('.description');
const author = document.querySelectorAll('.author');
const date = document.querySelectorAll('.date');
const cards = document.querySelectorAll('.card')

//fetch local json data
fetch("/src/scripts/data.json")
    .then(response => {
    return response.json();
    })
    .then(jsonData => {
        displayData(jsonData)
    });

const displayData = (data) => {
    let dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let postedDate = new Date(data.date)

    for (let i=0; i < data.length; i++){
        author[i].innerText = data[i].author
        cardTitle[i].innerText = data[i].title
        description[i].innerText = data[i].description
    }

    for (let i = 0; i < cards.length; i++){
        cards[i].addEventListener('click', ()=> {
            showHeader(i,data)
        })
    }
}

const showHeader = (cardNum,data) => {
    let clickedData = data[cardNum]
    headerTitle[0].innerText = clickedData.title
    headerAuthor.innerText = clickedData.author
    // headerDate[0].innerText = clickedData.author
}