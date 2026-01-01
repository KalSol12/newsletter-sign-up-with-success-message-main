 const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const error = document.getElementById("error");
    const signup = document.getElementById("signup");
    const success = document.getElementById("success");
    const userEmail = document.getElementById("userEmail");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        error.style.display = "inline";
        emailInput.classList.add("invalid");
        return;
      }

      error.style.display = "none";
      emailInput.classList.remove("invalid");

      userEmail.textContent = email;
      signup.style.display = "none";
      success.style.display = "block";
    });

    function dismiss() {
      success.style.display = "none";
      signup.style.display = "grid";
      emailInput.value = "";
    }