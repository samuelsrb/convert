const amount = document.querySelector("#amount");

amount.addEventListener("input", (e) => {
  e.preventDefault();

  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");
});
