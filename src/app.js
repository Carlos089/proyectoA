var pasteles = {
        name: "",
        description: "",
        image: "",
        punctuation: "",
        reviewAnonymous: true,
}
//data:image/jpeg;base64,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


var stars = {
    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
}



pasteles["name"] = prompt("Qué pastel te gusta?");
document.getElementById("nameId").innerHTML = "Me gusta " + pasteles["name"] + " porque está riquísimo!";

pasteles["description"] = prompt("¿Cómo lo describirías?")
document.getElementById("descriptionId").innerHTML = pasteles["description"];

pasteles["image"] = prompt("Cuelga una foto (con una dirección de imagen web)");
document.getElementById("imgId").src = pasteles["image"];

var rating = prompt("¿Cuántas estrellas le das? (una, dos, tres, cuatro o cinco)");
document.getElementById("ratingId").innerHTML = stars[rating];

pasteles["reviewAnonymous"] = confirm("¿Deseas tu reseña anónima?");
document.getElementById("anonymousOrNotId").checked = pasteles["reviewAnonymous"];