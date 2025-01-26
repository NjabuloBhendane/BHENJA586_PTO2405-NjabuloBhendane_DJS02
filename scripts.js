const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (!dividend || !divider) {
    alert(
      "Division not performed. Both values are required in inputs. Try again."
    );
    return; // Prevent division if inputs are empty
  }

  //Check if divider is equal to zero 
  if (divider == 0) {
    alert("Division not performed. Invalid number provided. Try again.");
    return;
  }
  // added Math.trunc()
  result.innerText = Math.trunc(dividend / divider);
});
