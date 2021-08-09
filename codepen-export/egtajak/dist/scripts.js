let color = "purple"

let number = 10

let world = "cool" 

if(color = 'purple') {
    $(".north").css("background-color", "purple")
}

if(number > 100) {
    $(".east").text('wow, de nagy szám')
} else {
    $(".east").text('ez csak egy közönséges szám')
}

if(world = "cool") {
    $(".south").text('A DOM Ereje')
} else { $(".west").text('A DOM Ereje')
}