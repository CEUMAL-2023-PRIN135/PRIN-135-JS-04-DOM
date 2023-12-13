const student = {
  lastName: "Yeager",
  givenName: "Eren",
  course: "BSIT",
  year: "3",
  picture: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  quote: ""
}

const buildTemplate = (student) => {
  const component = document.createElement("div");
  component.classList.add("col");
  
  component.innerHTML = `<div class="card">
          <img src="${student.picture}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${student.lastName}, ${student.givenName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${student.course} - ${student.year}</h6>
            <p class="card-text">${student.quote}</p>
          </div>
        </div>`;

  return component;
}

const displayOutput = (template, callback) => {
  document.querySelector("#div-students").prepend(template);
  callback();
}

const addStudent = (lastName, givenName, course, year, picture, quote, callback) => {
  student.lastName = lastName;
  student.givenName = givenName;
  student.course = course;
  student.year = year;
  student.picture = picture;
  student.quote = quote;

  const card = buildTemplate(student);
  displayOutput(card, callback);
}

const btnSave = document.querySelector("#btn-save");
btnSave.addEventListener("click", () => {
  let lastName = document.querySelector("#text-last-name").value;
  let givenName = document.querySelector("#text-given-name").value;
  let course = document.querySelector("#list-course").value;
  let year = document.querySelector("#list-year").value;
  let picture = document.querySelector("#text-picture").value;
  let quote = document.querySelector("#text-quote").value;

  addStudent(lastName, givenName, course, year, picture, quote, formReset);
});

const btnDisable = document.querySelector("#btn-disable");
btnDisable.addEventListener("click", () => {
  const formInput = document.querySelectorAll(".student-data");

  let isDisabled = false;
  formInput.forEach((item) => {
    isDisabled = item.hasAttribute("disabled");
  })
  
  if(isDisabled) {
    formInput.forEach((item) => {
      item.removeAttribute("disabled");
    });
    
    btnSave.removeAttribute("disabled");

    btnDisable.innerHTML = "Disable";
  } else {
    formInput.forEach((item) => {
      item.setAttribute("disabled", true);
    });
    btnSave.setAttribute("disabled", true);

    btnDisable.innerHTML = "Enable";
  }
});

const formReset = () => {
  let form = document.querySelector("#form-student");
  form.reset();
}