import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AddNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate(); 
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, content };
    setNotes([...notes, newNote]);
    setTitle('');
    setContent('');
    navigate('/');
  };

  return (
    <div>
      <h1>Tambah Catatan</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Catatan"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Simpan</button>
      </form>
      <Link to="/">Kembali</Link>
    </div>
  );
}

export default AddNote;