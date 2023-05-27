const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

function validateForm(event) {
  const errorMessages = document.querySelectorAll(".error-message");
  let isValid = true;

  errorMessages?.forEach((message) => {
    message.innerHTML = "";
  });

  if (!checkLength(fullName.value, 4)) {
    isValid = false;
    addErrorMessage("Please enter your full name.", fullName);
  }

  if (!validateEmail(email.value)) {
    isValid = false;
    addErrorMessage("Please enter a valid email address.", email);
  }

  if (!checkLength(message.value, 24)) {
    isValid = false;
    addErrorMessage("Please enter a message (at least 25 characters).", message);
  }

  if (!checkLength(subject.value, 14)) {
    isValid = false;
    addErrorMessage("Please enter a subject (at least 15 characters).", subject);
  }

  if (isValid) {
    console.log("IT WORKS");
    return true;
  }
}

function addErrorMessage(message, field) {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;
  field.classList.add("error");
  field.style.borderColor = "red";
  field.parentNode.insertBefore(errorMessage, field.nextSibling);
}

function checkLength(value, len) {
  return value.trim().length >= len;
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
let btn = document.querySelector("#contactButton");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateForm()) {
    form.innerHTML = `<div>
                        <h3 style="text-align: center; font-size: 2rem; margin-top: 50px;">Thank you! Form has been submitted.</h3>
                        <button id="successReturn" class="cta" style="padding: 5px; margin-right: 5px;">Go back</button>
                      </div>`;
    // let btn = document.querySelector("#successReturn");
      console.log("form complete");
      // setTimeout(function() {
      //   document.location.reload();
      // }, 3000);
  } else {
    console.log("Complete form");
    event.preventDefault();
  }
});

fullName.addEventListener("input", () => {
  if (fullName.classList.contains("error")) {
    if (checkLength(fullName.value, 4)) {
      fullName.classList.remove("error");
      const errorMessage = fullName.nextSibling;
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        fullName.parentNode.removeChild(errorMessage);
      }
      fullName.style.borderColor = "";
    }
  }
});

subject.addEventListener("input", () => {
  if (subject.classList.contains("error")) {
    if (checkLength(subject.value, 14)) {
      subject.classList.remove("error");
      const errorMessage = subject.nextSibling;
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        subject.parentNode.removeChild(errorMessage);
      }
      subject.style.borderColor = "";
    }
  }
});

email.addEventListener("input", () => {
  if (email.classList.contains("error")) {
    if (validateEmail(email.value)) {
      email.classList.remove("error");
      const errorMessage = email.nextSibling;
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        email.parentNode.removeChild(errorMessage);
      }
      email.style.borderColor = "";
    }
  }
});

message.addEventListener("input", () => {
  if (message.classList.contains("error")) {
    if (checkLength(message.value, 24)) {
      message.classList.remove("error");
      const errorMessage = message.nextSibling;
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        message.parentNode.removeChild(errorMessage);
      }
      message.style.borderColor = "";
    }
  }
});
