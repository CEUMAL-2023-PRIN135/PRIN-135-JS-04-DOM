const student = {
  lastName: "Yeager",
  givenName: "Eren",
  course: "BSIT",
  year: "3"
}

const buildTemplate = (student) => {
  const component = document.createElement("div");
  
  component.classList.add("text-bg-success", "p-2", "m-1", "text-center");
  component.innerHTML = `My name is ${student.givenName} ${student.lastName} from ${student.course} - ${student.year}.`;

  return component;
}

const displayOutput = (template) => {
  document.querySelector(".main").append(template);
}

const btnSave = document.querySelector("#btn-save");
btnSave.addEventListener("click", () => {
  let lastName = document.querySelector("#text-last-name").value;
  let givenName = document.querySelector("#text-given-name").value;

  student.lastName = lastName;
  student.givenName = givenName;
  
  const template = buildTemplate(student);
  displayOutput(template);
});

const btnDisable = document.querySelector("#btn-disable");
btnDisable.addEventListener("click", () => {
  const lastName = document.querySelector("#text-last-name");
  const givenName = document.querySelector("#text-given-name");

  if(lastName.hasAttribute("disabled") && givenName.hasAttribute("disabled")) {
    lastName.removeAttribute("disabled");
    givenName.removeAttribute("disabled");
    btnSave.removeAttribute("disabled");
    
    btnDisable.innerHTML = "Disable";
  } else {
    lastName.setAttribute("disabled", true);
    givenName.setAttribute("disabled", true);
    btnSave.setAttribute("disabled", true);
    
    btnDisable.innerHTML = "Enable";
  }
});