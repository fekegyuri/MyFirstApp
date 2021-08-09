 let nevek = ['Gyuri', 'Eszti', 'Dénes', 'Ádám']

 nevek.forEach(nevek => {
    if (nevek === 'Gyuri') {
    $('ul').append(`<li><strong>${nevek}</strong></li>`)
} else {$('ul').append(`<li>${nevek}</li>`)}
})

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  } 

$('body').append(`<h1>${additionalBlock.title}</h1>`)
$('body').append(`<p>${additionalBlock.text}</p>`)

/*
let nevek = (array) => {
    array.forEach(nevek => {
        $('ul').append(`<li>${nevek}</li>`)
    })
}

nevek(['Gyuri', 'Eszti', 'Dénes', 'Ádám'])*/