const createNoteBtn = document.querySelector('#js-create-note-btn');
createNoteBtn.addEventListener('click', (event) => {
  const descriptionNode = document.querySelector('#js-input-note-description');
  const descriptionValue = descriptionNode.value;

  const newNote = {
    description: descriptionValue
  };
  
  createNote(newNote);

  descriptionNode.value = '';
});

function createNote(note) {
  const noteContainerNode = document.createElement('div');
  noteContainerNode.classList.add('note-created');

  const noteDescriptionNode = document.createElement('p');
  noteDescriptionNode.classList.add('note-description');
  noteDescriptionNode.innerText = note.description;

  noteContainerNode.appendChild(noteDescriptionNode);
  
  const notesContainer = document.querySelector('#notes-container');
  notesContainer.appendChild(noteContainerNode);
};