document
  .getElementById("login-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorEl = document.getElementById("error");

    try {
      const res = await fetch("https://520fa4d344da40eb.mokky.dev/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Ошибка авторизации");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);

      window.location.href = "/instructions/instructions.html";
    } catch (err) {
      errorEl.textContent = err.message;
    }
  });
