fetch('http://localhost:3000/api/games')
    .then(response => response.json())
    .then(games => {
        let rows = games.map(element => createGameTemplate(element));
        let table = $("#games tbody");
        table.append(rows);
    })
    .catch(error => console.log(error))

function createGameTemplate(game) {
    let template = $("#game-item-template")[0].innerHTML;
    return Mustache.render(template, game);
}
