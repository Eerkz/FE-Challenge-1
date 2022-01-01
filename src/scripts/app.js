
//get elements
const container = document.querySelector('.info-cont');
const headerTitle = document.querySelectorAll('.header-title');
const img = document.querySelectorAll('img');
const cardTitle = document.querySelectorAll('.card-title');
const description = document.querySelectorAll('.description');
const author = document.querySelectorAll('.author');
const date = document.querySelectorAll('.date');

//fetch local json data
fetch("/src/scripts/data.json")
    .then(response => {
    return response.json();
    })
    .then(jsonData => {
        displayData(jsonData)
    });

const displayData = (data) => {
    data.forEach(data => {
        // console.log(data)
        showUI(data)
    })
}

const showUI = (data) => {
    console.log(data)
}