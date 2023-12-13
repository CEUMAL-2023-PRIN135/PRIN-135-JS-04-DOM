const student = {
  lastName: "Yeager",
  givenName: "Eren",
  course: "BSIT",
  year: "3"
}

const buildTemplate = (student) => {
  const component = document.createElement("div");
  
  component.innerHTML = `My name is ${student.givenName} ${student.lastName} from ${student.course} - ${student.year}.`;

  return component;
}

const displayOutput = (template) => {
  document.querySelector(".main").append(template);
}

const introduce = buildTemplate(student);

displayOutput(introduce);