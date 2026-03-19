const USD = 5.19;
const EUR = 6;
const GBP = 6.94;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

amount.addEventListener("input", (e) => {
  e.preventDefault();

  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
});

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    let total = amount * price;

    if (isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.");
    }

    total = formatCurrencyBRL(total).replace("R$", "");
    result.textContent = `${total} Reais`;

    footer.classList.add("show-result");
  } catch (e) {
    footer.classList.remove("show-result");
    console.log(e);
    alert("Não foi possivel converter. Tente novamente mais tarde");
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
