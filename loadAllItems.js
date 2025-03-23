(async function loadAllItems() {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  let clicks = 0;
  const maxClicks = 100;

  while (clicks < maxClicks) {
    // Znajdź konkretny span z tekstem "Pokaż więcej"
    const span = Array.from(document.querySelectorAll('span[aria-hidden="true"]'))
      .find(el => el.textContent.trim() === "Pokaż więcej");

    // Znajdź przycisk nadrzędny
    const button = span?.closest('button');

    if (!button || button.disabled) {
      console.log("Nie znaleziono więcej przycisków do kliknięcia lub przycisk nieaktywny.");
      break;
    }

    console.log(`Kliknięcie nr ${++clicks}...`);
    button.click();

    // Czekaj na załadowanie kolejnej porcji
    await delay(2000 + Math.random() * 1000);
  }

  console.log(`Skończono. Kliknięto ${clicks} razy.`);
})();
