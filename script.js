document.getElementById("country-select").addEventListener("change", function() {
    let country = this.value;
    let display = document.getElementById("country-recommendation");
    
    if (country === "Japan") {
        display.innerHTML = `<img src="images/japan.jpg" alt="Japan"><p>Explore the beautiful cherry blossoms in Japan.</p>`;
    } else if (country === "France") {
        display.innerHTML = `<img src="images/france.jpg" alt="France"><p>Visit the stunning Eiffel Tower in Paris.</p>`;
    } else {
        display.innerHTML = "";
    }
});
