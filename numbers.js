const url = 'http://numbersapi.com/';
const favNumber = 13;

// Part 1

$.getJSON(`${url}${favNumber}?json`)
.then(data => {
    $('#fav-number').append(data.text)
});

// Part 2

const favNumbers = [favNumber, 10, 7, 28];

$.getJSON(`${url}${favNumbers}?json`)
.then(data => {
    for(let i=0; i<favNumbers.length; i++){
        $('#numbers-facts').append(data[favNumbers[i]])
    }
    
});

// Part 3

Promise.all(
    Array.from({length:4}, ()=>{
        return $.getJSON(`${url}${favNumber}?json`)
    })).then(numberFacts =>{
        numberFacts.forEach(fact => {
            $('#multiple').append(`${fact.text} `)
        });
    })
