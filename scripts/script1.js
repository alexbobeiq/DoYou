document.addEventListener("DOMContentLoaded", function () {
  let noCheckbox = document.getElementById("no");
  let yesCheckbox = document.getElementById("yes");

  noCheckbox.addEventListener("click", function () {
    noCheckbox.checked = false; // Prevent selecting "No"
    yesCheckbox.checked = true; // Auto-select "Yes"
  });
});
