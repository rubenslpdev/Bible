// Função para criar um novo usuário
function createUser() {
  fetch("https://www.abibliadigital.com.br/api/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "rubenslpbiblia",
      email: "rubenslp@gmail.com",
      password: "_>zc8<qGRD39", // tamanho mínimo de 6 dígitos
      notifications: true, // receber emails de atualizações do www.abibliadigital.com.br
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log("Usuário criado com sucesso:", data);
    })
    .catch((error) => {
      console.error("Erro ao criar usuário:", error);
    });
}

// Chame a função createUser para executar a criação do usuário
createUser();
