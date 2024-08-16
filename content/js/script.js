const pwShowHide = document.querySelectorAll(".showHidePw"),
      pwField = document.querySelector("#password"); // Select the password input field directly

// JS code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        if (pwField.type === "password") {
            pwField.type = "text";

            pwShowHide.forEach(icon => {
                icon.classList.replace("uil-eye-slash", "uil-eye");
            });
        } else {
            pwField.type = "password";

            pwShowHide.forEach(icon => {
                icon.classList.replace("uil-eye", "uil-eye-slash");
            });
        }
    });
});
