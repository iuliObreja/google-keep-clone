

createNote();

function createNote() {
      // when I click the "add" button, a note will be created
      // the text from the input will be erased (to fix bug)
  const createNoteBtn = document.querySelector('#js-create-note-btn');
  createNoteBtn.addEventListener('click', () => {
      addDescription();
    });

  function addDescription() {
      // 1. get acces to the input element
      // 2. save the text added inside the input (value) in a variable
    const inputElem = document.querySelector('#js-input-note-creator');
    const inputTextElem = inputElem.value;

      // 3.get acces to the description section of the note
      // 4.display the text added in the input, in this note description
    const noteDescriptionElem = document.querySelector('#js-note-description');
    noteDescriptionElem.innerHTML = inputTextElem;

      // 5.save the note description into local storage
    console.log(localStorage.setItem('description', inputTextElem));
  };

  function addInputTitle() {
      // 1.get acces to the "title" input
      // 2.add eventListener for saving the text from the input
    const noteTitleElem = document.querySelector('#js-note-title');
    noteTitleElem.addEventListener('input', (event) => {
      const inputValue = event.target.value;
      // 3.save the note title into local storage
      console.log(localStorage.setItem('noteTitle', inputValue));
    });
  };
};

