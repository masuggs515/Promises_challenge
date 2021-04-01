const url = 'https://deckofcardsapi.com/api/deck'
const $btn = $('button')

// part 1
$.getJSON(`${url}/new/draw`).then(res => {
    console.log(`${res.cards[0].value} of ${res.cards[0].suit}`)
})

// part 2

$.getJSON(`${url}/new/draw?count=2`).then(res => {
    let firstCard =res.cards[0];
    let secondCard = res.cards[1];
    console.log(`${firstCard.value} of ${firstCard.suit}`);
    console.log(`${secondCard.value} of ${secondCard.suit}`);

})

// console.log(`${res.cards[0].value} of ${res.cards[0].suit}`)

// part 3

let deckID = null;

$.getJSON(`${url}/new/shuffle`).then(res =>{
    deckID = res.deck_id;
    return deckID;
})
$btn.on('click', ()=>{
    $.getJSON(`${url}/${deckID}/draw`).then(res=>{
        let image = res.cards[0].image;
        $('#cards').append(`
        <img src='${image}'>`);
        $('img').css('position', 'absolute');
        if(res.remaining==0){
            $btn.remove();
        }
    })
    
})
