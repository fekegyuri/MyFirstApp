$("button").click(() => {
    $('ul').append(`<li>${$('#text').val()}</li>`)
})

$("li").click(() => {
    $('li').css('text-decoration', 'line-through')
})