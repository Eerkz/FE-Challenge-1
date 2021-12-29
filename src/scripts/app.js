const container = document.querySelector('.info-cont');
const img = document.querySelectorAll('img');
let output = '';


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

}