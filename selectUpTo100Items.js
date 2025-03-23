(function selectUpTo100Items() {
  const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'))
    .filter(el => el.getAttribute('aria-label')?.startsWith('Wybierz'));

  console.log(`Znaleziono ${checkboxes.length} elementów do zaznaczenia.`);

  let selected = 0;

  for (let checkbox of checkboxes) {
    if (selected >= 100) break;

    if (!checkbox.checked) {
      checkbox.click();
      selected++;
    }
  }

  console.log(`Zaznaczono ${selected} elementów.`);
})();
