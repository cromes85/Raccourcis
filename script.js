// Charger les données initiales depuis le fichier JSON
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const grid = document.getElementById("grid");
        data.squares.forEach(square => createSquare(square)); // Crée un carré pour chaque entrée du fichier JSON
    })
    .catch(error => console.error("Error loading data:", error));

// Fonction pour créer un carré à partir d'une donnée
function createSquare(square) {
    const grid = document.getElementById("grid");
    const div = document.createElement("div");
    div.className = "square";

    // Vérifie le type du carré
    if (square.type === "link") {
        div.textContent = square.label || "Link"; // Texte du bouton
        div.onclick = () => window.open(square.content, "_blank"); // Ouvre le lien dans un nouvel onglet
    } else if (square.type === "text") {
        div.textContent = square.label || "Copy"; // Texte du bouton
        div.onclick = () => {
            navigator.clipboard.writeText(square.content); // Copie le contenu dans le presse-papiers
            showNotification("Text copied to clipboard!"); // Affiche une notification
        };
    }

    grid.appendChild(div); // Ajoute le carré à la grille
}

// Fonction pour afficher une notification personnalisée
function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

    document.body.appendChild(notification); // Ajoute la notification au DOM

    // Supprime automatiquement la notification après 2 secondes
    setTimeout(() => {
        notification.remove();
    }, 2000);
}
