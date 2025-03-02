const firstStep = document.querySelector(".first-step");
const secondStep = document.querySelector(".second-step");
const thirdStep = document.querySelector(".third-step");
const activeStep = document.querySelector(".active-step");
const dots = document.querySelectorAll(".dot");

let currentStep = 1;

function showStep(step) {
  // Display current step in the UI
  firstStep.classList.remove("active-step");
  secondStep.classList.remove("active-step");
  thirdStep.classList.remove("active-step");
  if (step === 1) {
    firstStep.classList.add("active-step");
  } else if (step === 2) {
    secondStep.classList.add("active-step");
  } else if (step === 3) {
    thirdStep.classList.add("active-step");
  }
  // Update step indicator dots
  dots.forEach((dot, index) => {
    if (index === step - 1) {
      dot.classList.add("active-dot");
    } else {
      dot.classList.remove("active-dot");
    }
  });

  // Update step text
  document.querySelector(".steps").innerText = `Step ${step} of 3`;
}

function nextStep() {
  // Handle next step function
  if (currentStep < 3) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  // Handle previous step function
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}
document
  .getElementById("multiStepForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;
    let optionValue =
      document.querySelector(".option.active-option")?.innerText.trim() || "";

    if (nameValue === "" || emailValue === "" || optionValue === "") {
      alert("please fill all details");
      return;
    }

    currentStep = 3;
    showStep(currentStep);

    //   update summary pages
    document.querySelector(".name-details").innerText = `Name: ${nameValue}`;
    document.querySelector(".email-details").innerText = `Email: ${emailValue}`;
    document.querySelector(".selected-topics").innerHTML = `<ul><li>${optionValue}</li></ul>`;


    alert("🎉 Success");
  });

function selectOption(selected) {
  // Remove active class from all options
  document.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("active-option");
  });

  // Add active class to clicked option
  selected.classList.add("active-option");
}

showStep(currentStep);
