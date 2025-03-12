async function getPlayer() {
    const playerTag = document.getElementById("playerTag").value.replace("#", "%23");
    if (!playerTag) {
        alert("Please enter a player tag!");
        return;
    }
// https://api.brawlstars.com/v1/players/%23LLRLLU99J/battlelog
    try {
        const response = await fetch(`https://api.brawlstars.com/v1/players/${playerTag}`);
        if (!response.ok) throw new Error('Player not found or error fetching data.');
        const data = await response.json();
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("output").textContent = "Error: " + error.message;
    }
}
