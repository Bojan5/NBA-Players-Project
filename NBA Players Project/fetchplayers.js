"use strict";

let api = "https://www.balldontlie.io/api/v1/players";
let players = [];
let playersTable = document.getElementById("players-table");

fetch(api)
  .then((response) => response.json())
  .then(renderPlayers)
  .catch((err) => console.log(err));

function renderPlayers(response) {
  players = response.data;
  console.log(players);
  players.forEach((player, key) => {
    let row = playersTable.insertRow(key + 1);
    let ID = row.insertCell(0);
    let fullName = row.insertCell(1);
    let position = row.insertCell(2);
    let Team = row.insertCell(3);
    let City = row.insertCell(4);

    ID.innerHTML = player.id;
    fullName.innerHTML = player.first_name + " " + player.last_name;
    position.innerHTML = player.position;
    Team.innerHTML = player.team.full_name;
    City.innerHTML = player.team.city;
  });

  document.getElementById("loading").style.display = "none";
}
