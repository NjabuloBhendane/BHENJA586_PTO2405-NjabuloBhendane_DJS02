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
 // Check for "YOLO" and  "+++"
  if (dividend === "YOLO" && divider === "+++"){
    // Replace entire screen and display message
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
    //Log the error  
    console.error ("Critical error: Invalid input detected");
    //logs the call stack 
    console.trace();
   return;

  }
  // added Math.trunc()
  result.innerText = Math.trunc(dividend / divider);
});
