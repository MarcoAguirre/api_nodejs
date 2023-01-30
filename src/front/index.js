fetch('http://localhost:3000/api/games')
    .then(response => response.json())
    .then(data => {
        const apiResponse = document.getElementById('games');
        apiResponse.innerHTML =  "<ul>";
        data.forEach(game => {
            apiResponse.innerHTML += "<li>" + game.title + "</li>";
        });
        apiResponse.innerHTML += "</ul>";
    })
    .catch(error => console.log(error))
