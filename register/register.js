window.onload = function () {
  let participantCount = 1;

  document.getElementById("add").addEventListener("click", function () {
    participantCount++;

    let participantSection = document
      .querySelector(".participant1")
      .cloneNode(true);
    participantSection.className = "participant" + participantCount;

    let inputs = participantSection.querySelectorAll("input");
    let select = participantSection.querySelector("select");

    inputs.forEach(function (input) {
      input.id = input.id + participantCount;
    });

    select.id = select.id + participantCount;

    participantSection.querySelector("p").textContent =
      "Participant " + participantCount;

    let participantsFieldset = document.querySelector(".participants");
    participantsFieldset.insertBefore(
      participantSection,
      document.getElementById("add")
    );
  });

  document.querySelector("form").addEventListener("submit", function (event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Find all of the fee inputs and sum up the totals
    let feeInputs = document.querySelectorAll("input[name='fee']");
    let totalFees = 0;
    feeInputs.forEach(function (input) {
      totalFees += Number(input.value);
    });

    // Get the adult name from the form
    let adultName = document.querySelector("input[name='adult_name']").value;

    // Hide the Form
    this.style.display = "none";

    // Show the summary element with the message
    let summary = document.getElementById("summary");
    summary.style.display = "block";
    summary.innerHTML = `Thank you ${adultName} for registering. You have registered ${participantCount} participants and owe $${totalFees} in Fees.`;
  });
};

function participantTemplate(count) {
  return `
      <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
          <label for="fname${count}"> First Name<span>*</span></label>
          <input id="fname${count}" type="text" name="fname" value="" required />
        </div>
        <div class="item activities">
          <label for="activity${count}">Activity #<span>*</span></label>
          <input id="activity${count}" type="text" name="activity" />
        </div>
        <div class="item">
          <label for="fee${count}">Fee ($)<span>*</span></label>
          <input id="fee${count}" type="number" name="fee" />
        </div>
        <div class="item">
          <label for="date${count}">Desired Date <span>*</span></label>
          <input id="date${count}" type="date" name="date" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select id="grade${count}">
            <option selected value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      </section>
    `;
}
