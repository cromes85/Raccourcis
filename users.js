// Charger la liste des utilisateurs depuis le fichier JSON
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const userTableBody = document.getElementById("userTableBody");
        data.users.forEach(user => {
            const row = document.createElement("tr");

            // Création des cellules
            const emailCell = document.createElement("td");
            emailCell.textContent = user.email;
            emailCell.classList.add("clickable"); // Ajout d'une classe pour le style
            emailCell.onclick = () => copyToClipboard(user.email);

            const usernameCell = document.createElement("td");
            usernameCell.textContent = user.username;
            usernameCell.classList.add("clickable"); // Ajout d'une classe pour le style
            usernameCell.onclick = () => copyToClipboard(user.username);

            // Ajout des cellules à la ligne
            row.appendChild(emailCell);
            row.appendChild(usernameCell);
            userTableBody.appendChild(row);
        });
    })
    .catch(error => console.error("Error loading users:", error));

// Fonction pour copier le texte dans le presse-papiers
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => showNotification("Copié : " + text))
        .catch(err => console.error("Erreur de copie", err));
}

// Fonction pour afficher une notification après la copie
function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

    document.body.appendChild(notification);

    // Supprime automatiquement la notification après 2 secondes
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

    // Fonction pour retourner à la page d'accueil (chemin relatif)
    function goToHome() {
    window.location.href = "./";
}

