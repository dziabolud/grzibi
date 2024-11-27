// Konfiguracja poziomów
const levels = [
    { requiredPoints: 300, Modifier: 1.2 },
    { requiredPoints: 600, Modifier: 1.35 },
    { requiredPoints: 1200, Modifier: 1.5 },
    { requiredPoints: 2000, Modifier: 1.65 },
    { requiredPoints: 3050, Modifier: 1.7 },
    { requiredPoints: 4000, Modifier: 1.75 },
    { requiredPoints: 5500, Modifier: 1.8 },
    { requiredPoints: 7500, Modifier: 1.85 },
    { requiredPoints: 10050, Modifier: 1.9 },
    { requiredPoints: 15000, Modifier: 2.0 },
];

// Elementy DOM
const slider = document.getElementById("slider");
const percentageInput = document.getElementById("percentage");
const pointsDisplay = document.getElementById("points");
const levelDisplay = document.getElementById("level");
const bonusDisplay = document.getElementById("bonus");

// Funkcja aktualizacji punktów, poziomu i bonusu
function updateValues(value) {
    // Przeliczenie procent na punkty
    const points = Math.round((value / 100) * 15000);
    pointsDisplay.textContent = points;

    // Ustalanie poziomu
    let currentLevel = 1;
    let currentBonus = levels[0].Modifier;
    for (let i = 0; i < levels.length; i++) {
        if (points >= levels[i].requiredPoints) {
            currentLevel = i + 1;
            currentBonus = levels[i].Modifier;
        } else {
            break;
        }
    }

    // Wyświetlenie poziomu i bonusu
    levelDisplay.textContent = currentLevel;
    bonusDisplay.textContent = currentBonus.toFixed(2);
}

// Event listeners
slider.addEventListener("input", (e) => {
    const value = e.target.value;
    percentageInput.value = value;
    updateValues(value);
});

percentageInput.addEventListener("input", (e) => {
    let value = e.target.value;
    if (value > 100) value = 100; // Ograniczenie maksymalnej wartości
    if (value < 0) value = 0; // Ograniczenie minimalnej wartości
    percentageInput.value = value;
    slider.value = value;
    updateValues(value);
});

// Inicjalizacja
updateValues(slider.value);
