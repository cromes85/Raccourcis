// Charger la liste des utilisateurs depuis le fichier JSON
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const userTableBody = document.getElementById("userTableBody");
        data.users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${user.email}</td><td>${user.username}</td>`;
            userTableBody.appendChild(row);
        });
    })
    .catch(error => console.error("Error loading users:", error));
