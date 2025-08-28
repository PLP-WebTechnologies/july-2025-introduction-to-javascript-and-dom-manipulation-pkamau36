// Function to check age (Part 1 + Part 2)
function checkAge() {
  let age = Number(document.getElementById("ageInput").value);
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ Eligible to vote";
  } else {
    result.textContent = "❌ Not eligible";
  }
}

// Function with loop (Part 3)
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = "";

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

