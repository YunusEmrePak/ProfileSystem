const projectButton = document.querySelector(".btn_project");
const contactButton = document.querySelector(".btn_contact");
const addButton = document.querySelector(".btn_add");
const projectArea = document.querySelector(".project_container");
const contactArea = document.querySelector(".contact_container");
const addFileArea = document.querySelector(".add_project");
const addFileButton = document.querySelector(".btn_add_file");
const project_name = document.querySelector(".project_name input");
const project_app = document.querySelector(".project_app input");
const project_language = document.querySelector(".project_language input");
const project_link = document.querySelector(".project_link input");
const message_input = document.querySelector(".message input");
const dropdown_content = document.querySelector(".dropdown-content");
const submitButton = document.querySelector(".btn_submit");
const noText = document.querySelector(".noText");
const message_counter = document.querySelector(".counter");

const info = new FileInfo(fileList);

var i;

var counter = 0;

window.addEventListener("load", () => {
    for (i = 0; i < info.control(); i++) {
        let files = info.getInfo();
        addDiv(files);
        info.next();
    }
});

projectAreaVisibility = () => {

    contactArea.style.visibility = "hidden";
    projectArea.style.visibility = "visible";
    addFileArea.style.visibility = "hidden";
    projectButton.classList.add("active");
    addButton.classList.remove("active");
    contactButton.classList.remove("active");
  
}

projectButton.addEventListener("click", projectAreaVisibility);

contactAreaVisibility = () => {

    projectArea.style.visibility = "hidden";
    contactArea.style.visibility = "visible";
    addFileArea.style.visibility = "hidden";
    contactButton.classList.add("active");
    addButton.classList.remove("active");
    projectButton.classList.remove("active");

}

contactButton.addEventListener("click", contactAreaVisibility);

addFileAreaVisibility = () => {

    projectArea.style.visibility = "hidden";
    contactArea.style.visibility = "hidden";
    addFileArea.style.visibility = "visible";
    contactButton.classList.remove("active");
    projectButton.classList.remove("active");
    addButton.classList.add("active");


}

addButton.addEventListener("click", addFileAreaVisibility);

addDiv = (files) => {
    const div = document.createElement('div');

    div.className = `project project${info.index + 1}`

    div.innerHTML = `

        <a href="#">${files.fileName}</a>
        <div class="med">${files.fileAppName}</div>
        <div class="icon">
            <i class="fa-solid fa-circle"></i> ${files.language}
        </div>

    `
    document.querySelector(".project_container").appendChild(div);
    const project_name = document.querySelector(".project a");
}

addMessage = () => {
    var a = document.createElement('a');
    a.innerHTML= `${message_input.value}`
    dropdown_content.appendChild(a);
    message_input.value = '';
    counter++;
    message_counter.innerHTML = `${counter}`;
}

addFileToArray = () => {
    var x = new File(`${project_name.value}`, `${project_app.value}`, `${project_language.value}`);
    fileList.push(x);
    info.next();
    let files = info.getInfo();
    addDiv(files);
    project_name.value = '';
    project_app.value = '';
    project_language.value = '';
    project_link.value = '';
    noText.style.visibility = "hidden";
}

addFileButton.addEventListener("click", addFileToArray);

submitButton.addEventListener("click", addMessage);

