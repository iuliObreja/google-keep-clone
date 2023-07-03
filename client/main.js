const notes = [];

const createNoteBtn = document.querySelector('#js-create-note-btn');
createNoteBtn.addEventListener('click', onClickCreateNote);

function onClickCreateNote() {
  const descriptionNode = document.querySelector('#js-input-note-description');
  const descriptionValue = descriptionNode.value;

  if(!descriptionValue) {
    alert('You cannot create an empty note!');
    return;
  };

  const newNote = {
    description: descriptionValue
  };
  
  notes.push(newNote);

  const notesContainer = document.querySelector('#notes-container');
  notesContainer.innerHTML = '';

  for (const note of notes) {
    createNote(note, notesContainer);
  };

  descriptionNode.value = '';
}

function createNote(note, container) {
  const noteContainerNode = document.createElement('div');
  noteContainerNode.classList.add('note-created');

  const noteDescriptionNode = document.createElement('p');
  noteDescriptionNode.classList.add('note-description');
  noteDescriptionNode.innerText = note.description;

  noteContainerNode.appendChild(noteDescriptionNode);
  
  container.appendChild(noteContainerNode);
};