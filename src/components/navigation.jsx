import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Halaman Utama</Link>
        </li>
        <li>
          <Link to="/add">Tambah Catatan</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;