function saveNote() {
    const noteText = document.getElementById('note').value;
    const notesElement = document.getElementById('notes');
  
    // إنشاء عنصر `p` لعرض الملاحظة
    const newNote = document.createElement('div');
    newNote.classList.add('note');
  
    const noteTextElement = document.createElement('p');
    noteTextElement.classList.add('note-text');
    noteTextElement.textContent = noteText;
  
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'حذف';
    deleteButton.onclick = function() {
      notesElement.removeChild(newNote);
    };
  
    newNote.appendChild(noteTextElement);
    newNote.appendChild(deleteButton);
  
    notesElement.appendChild(newNote);
  
    localStorage.setItem('note', noteText);
  
    document.getElementById('note').value = '';
  
    alert('تم حفظ المذكرة بنجاح!');
  }
  