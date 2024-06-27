alert("Ola")

document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("search");
        const suggestionsList = document.getElementById("suggestions");
    
        const camisas = ["camisa em malha", "camisa polo", "camisa metalica", "kit camisas", "camisa camuflada"];
    
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase();
            suggestionsList.innerHTML = "";
    
            if (query) {
                const filteredCamisas = camisas.filter(camisa => camisa.toLowerCase().includes(query));
                filteredCamisas.forEach(camisa => {
                    const li = document.createElement("li");
                    li.textContent = camisa;
                    suggestionsList.appendChild(li);
                });
            }
        });
    
        suggestionsList.addEventListener("click", function (event) {
            if (event.target.tagName === "LI") {
                searchInput.value = event.target.textContent;
                suggestionsList.innerHTML = "";
            }
        });
    });