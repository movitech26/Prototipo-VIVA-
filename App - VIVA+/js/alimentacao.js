
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("nutritionForm");
  const result = document.getElementById("result");
  const error = document.getElementById("formError");
  const activityOptions = document.querySelectorAll(".activity-option");
  const resetButton = document.getElementById("resetButton");

  if (!form || !result || !error) {
    console.error("Não foi possível encontrar os elementos do formulário.");
    return;
  }

  // Destaca o nível de atividade selecionado
  activityOptions.forEach((option) => {
    option.addEventListener("change", () => {
      activityOptions.forEach((item) => {
        item.classList.remove("selected");
      });

      option.classList.add("selected");
    });
  });

  // Calcula a TMB e a estimativa de calorias diárias
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    error.textContent = "";

    const age = Number(document.getElementById("age")?.value);
    const weight = Number(document.getElementById("weight")?.value);
    const height = Number(document.getElementById("height")?.value);

    const sex = document.querySelector(
      'input[name="sex"]:checked'
    )?.value;

    const activityInput = document.querySelector(
      'input[name="activity"]:checked'
    );

    const activity = Number(activityInput?.value);

    if (
      !age ||
      !weight ||
      !height ||
      age < 18 ||
      age > 120 ||
      weight <= 0 ||
      height <= 0
    ) {
      error.textContent =
        "Confira os dados. Informe idade entre 18 e 120 anos e valores válidos de peso e altura.";
      result.hidden = true;
      return;
    }

    if (!sex || !activityInput || !Number.isFinite(activity)) {
      error.textContent =
        "Selecione o sexo utilizado na fórmula e seu nível de atividade física.";
      result.hidden = true;
      return;
    }

    // calculo revisado da TMB e calorias diárias
    const tmb =
      sex === "male"
        ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
        : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

    const daily = tmb * activity;

    // Exibe os resultados na página
    const tmbResult = document.getElementById("tmbResult");
    const dailyResult = document.getElementById("dailyResult");

    if (!tmbResult || !dailyResult) {
      console.error("Confira os IDs tmbResult e dailyResult no HTML.");
      error.textContent = "Não foi possível exibir os resultados. Confira o HTML.";
      return;
    }

    tmbResult.textContent = Math.round(tmb).toLocaleString("pt-BR");
    dailyResult.textContent = Math.round(daily).toLocaleString("pt-BR");

    result.hidden = false;
    result.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });

  // Limpa o formulário e oculta os resultados
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      form.reset();
      error.textContent = "";
      result.hidden = true;

      activityOptions.forEach((item) => {
        item.classList.remove("selected");
      });

      form.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});
