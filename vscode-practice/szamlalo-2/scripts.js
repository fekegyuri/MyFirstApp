/*let number = 0

$("#number").text(number)*/

$('#addButton').click(() => {
   $('#number').text(parseInt($('#number').html()) + 1)
})

$('#removeButton').click(() => {
    $('#number').text(parseInt($('#number').html()) - 1)
 })
 