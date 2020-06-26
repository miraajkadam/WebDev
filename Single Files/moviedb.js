var movies = [{
    name: "Brunges",
    watched: true,
    stars: 5
}, {
    name: "Frozen",
    watched: false,
    stars: 4.5
}, {
    name: "Mad Max Fury Road",
    watched: true,
    stars: 5
}, {
    name: "Les Misrables",
    watched: false,
    stars: 3.5
}]

//USING NORMAL FOR

// for (var i = 0; i < movies.length; i++) {
//     if (movies[i].watched) {
//         console.log("You have watched \"" + movies[i].name + "\" - " + movies[i].stars + " stars")
//     } else {
//         console.log("You have not watched \"" + movies[i].name + "\" - " + movies[i].stars + " stars")
//     }
// }

// USING FOR EACH

movies.forEach(function (i) {
    if (i.watched) {
        console.log("You have watched \"" + i.name + "\" - " + i.stars + " stars")
    } else {
        console.log(`You have not watched "${i.name}" - ${i.stars} stars`)
    }
})