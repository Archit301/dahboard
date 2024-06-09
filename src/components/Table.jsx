import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

const initialData = [
  { id: 1, title: 'Beetlejuice', year: '1988' },
  { id: 2, title: 'Ghostbusters', year: '1984' },
];

const Table = () => {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newYear, setNewYear] = useState('');

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  const handleEdit = row => {
    setIsEditing(true);
    setCurrentRow(row);
    setNewTitle(row.title);
    setNewYear(row.year);
  };

  const handleSave = () => {
    setData(data.map(item => (item.id === currentRow.id ? { ...item, title: newTitle, year: newYear } : item)));
    setIsEditing(false);
    setCurrentRow(null);
    setNewTitle('');
    setNewYear('');
  };

  const handleAdd = () => {
    const newEntry = { id: data.length + 1, title: 'New Movie', year: '2023' };
    setData([...data, newEntry]);
  };

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
    },
    {
      cell: row => <button onClick={() => handleEdit(row)}>Edit</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: row => <button onClick={() => handleDelete(row.id)}>Delete</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div>
      <button onClick={handleAdd}>Add New Entry</button>
      {isEditing && (
        <div>
          <h2>Edit Movie</h2>
          <input
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={newYear}
            onChange={e => setNewYear(e.target.value)}
            placeholder="Year"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
      <DataTable
        title="Movie List"
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Table
