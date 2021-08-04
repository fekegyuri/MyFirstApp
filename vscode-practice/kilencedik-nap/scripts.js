let nevem = "Gyuri"
let korom = 32
console.log('A javascript is betöltött.')
console.log(korom)

if(korom >= 21) {
    console.log('Már Amerikában is elég idős vagyok ahhoz, hogy igyak egy sört.')
} else if (korom >= 18) {
    console.log('Elég idős vagyok ahhoz, hogy igyak egy sört Európában.')
} else {
    console.log('Még nem léphetek dohányboltba.')
}

let masikKora = 18

if(masikKora  > 18) {
    console.log('Már elég idős ahhoz, hogy igyon egy sört.')
} else {
    console.log('Még nem léphetsz dohányboltba.')
} 


//jQuery part

let szovegAzOldalon = $('h1').text()
console.log(szovegAzOldalon)

if(korom >= 21) {
    $('h1').text('Ezt javascripbtől változtattuk meg.')
}

console.log($(".sarga").css("background-color"))
//$("li").css("background-color", "lime")
$(".sarga").css("background-color", "magenta")
$('p').html('alma, ami <i>fontos</i>')
$('ul').append('<li>ism</li>')
$("li:last-of-type").remove()
$("li").toggleClass('sarga')

$('#plusz').click(function() {
    $('ul').append('<li>ism</li>')
})

/* vagy

function MegEgyLi () {
    $('ul').append('<li>ism</li>')
})

$('button').click(MegEgyLi) */

$('#minusz').click(() => {
    $("li:last-of-type").remove()
})