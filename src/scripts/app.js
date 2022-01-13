
//get elements
const container = document.querySelector('.info-cont');
const headerTitle = document.querySelectorAll('.header-title');
const headerAuthor = document.querySelector('.header-author');
const headerDate = document.querySelector('.header-date');
const headerDuration = document.querySelector('.header-duration');
const img = document.querySelectorAll('img');
const cardTitle = document.querySelectorAll('.card-title');
const description = document.querySelectorAll('.description');
const author = document.querySelectorAll('.author');
const date = document.querySelectorAll('.date');
const cards = document.querySelectorAll('.card')
const duration = document.querySelectorAll('.duration')


//fetch local json data
fetch("/src/scripts/data.json")
    .then(response => {
    return response.json();
    })
    .then(jsonData => {
        displayData(jsonData)
    });

const displayData = (data) => {
    //show first card on header
    headerTitle[0].innerText = data[0].title
    headerAuthor.innerText = data[0].author
    headerDuration.innerText = `${data[0].duration} min. read`
    headerDate.innerText = getDate(data[0].date)

    for (let i=0; i < data.length; i++){
        let postDate = getDate(data[i].date)
        author[i].innerText = data[i].author
        cardTitle[i].innerText = data[i].title
        description[i].innerText = data[i].description
        date[i].innerText = postDate
        duration[i].innerText = `${data[i].duration} min. read`

        cards[i].addEventListener('click', ()=> {
            updateHeader(i,data,postDate)
        })
    }

}

const updateHeader = (cardNum,data,postDate) => {
    let clickedData = data[cardNum]
    headerTitle[0].innerText = clickedData.title
    headerAuthor.innerText = clickedData.author
    headerDuration.innerText = `${clickedData.duration} min. read`
    headerDate.innerText = postDate
}

const getDate = (date) => {
    let postDate = new Date(date.slice(0,9))
    
    return postDate.toLocaleDateString()
}