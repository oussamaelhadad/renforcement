const notes = document.querySelectorAll(".note");
const notes2 = document.getElementsByClassName("note");

const btnAjouter = document.getElementById("ajouter");
const btnSurligner = document.getElementById("surligner")
const btnlire = document.getElementById("lire")
const input = documet.getElementById("nouvelle-note")
const inputNote = document.getElementById("nouvelle-note");
const container = document.getElementById("notes-container");

btnSurligner.addEventListener("click", () => {
    notes.forEach(note => {
        note.classList.toggle("bg-yellow-200");
    })
})


btnAjouter.addEventListener("click", () => {
    const newnote = document.createElement("p");
    newnote.textContent = input.value
    container.appendChild(newnote)
})
