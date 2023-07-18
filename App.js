import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid';
import AddNote from "./components/AddNote";
import Search from "./components/Search";
import Header from "./components/Header";
const App =  () =>{

  const [notes,setNotes] = useState([{
    text: "Hello",
    date: "19-07-2023",
    id: nanoid(),
  },
  {
    text: "Ardent Group Project",
    date: "25-06-2023",
    id: nanoid(),
  },
  {
    text: "Major Project",
    date: "29-08-2023",
    id: nanoid(),
  },
]);
  
const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => { 
  localStorage.setItem(
    'react-notes-app-data', 
    JSON.stringify(notes)
    );
}, [notes]);

const addNote = (text) => {
   const date = new Date ();
   const newNote = {
       text: text , date:  date.toLocaleDateString(),id: nanoid()
   }

   const newNotes = [...notes, newNote];
   setNotes(newNotes);
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
         notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
         handleAddNote={addNote} 
         handleDeleteNote={deleteNote}></NotesList>
      </div>
    </div>
  );
};

export default App;