function addUser() {
    player1Name= document.getElementById("player1NameInput").value;
    player2Name= document.getElementById("player2nameInput").value;

    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);

    widow.location= "game_page.html";

}