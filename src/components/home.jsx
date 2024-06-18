import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [notes, setNotes] = useState([]);

  const handleDelete = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div>
      <h1>Catatan Harian</h1>
      <Link to="/add">Tambah Catatan</Link>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;