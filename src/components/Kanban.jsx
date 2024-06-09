import React, { useState } from 'react';
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

const initialBoard = {
  columns: [
    {
      id: 1,
      title: 'To Do',
      cards: [
        { id: 1, title: 'Card 1', description: 'Description for Card 1' },
        { id: 2, title: 'Card 2', description: 'Description for Card 2' },
      ],
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [
        { id: 3, title: 'Card 3', description: 'Description for Card 3' },
      ],
    },
    {
      id: 3,
      title: 'Done',
      cards: [
        { id: 4, title: 'Card 4', description: 'Description for Card 4' },
      ],
    },
  ],
};

const Kanban = () => {
  const [board, setBoard] = useState(initialBoard);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardDescription, setNewCardDescription] = useState('');
  const [selectedColumnId, setSelectedColumnId] = useState(initialBoard.columns[0].id);

  const handleCardAdd = () => {
    const newCard = {
      id: Math.max(...board.columns.flatMap(column => column.cards.map(card => card.id))) + 1,
      title: newCardTitle,
      description: newCardDescription,
    };

    const newBoard = {
      columns: board.columns.map(column => {
        if (column.id === selectedColumnId) {
          return {
            ...column,
            cards: [...column.cards, newCard],
          };
        }
        return column;
      }),
    };

    setBoard(newBoard);
    setNewCardTitle('');
    setNewCardDescription('');
  };

  const handleCardDelete = (columnId, cardId) => {
    const newBoard = {
      columns: board.columns.map(column => {
        if (column.id === columnId) {
          return {
            ...column,
            cards: column.cards.filter(card => card.id !== cardId),
          };
        }
        return column;
      }),
    };
    setBoard(newBoard);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-4 flex flex-col sm:flex-row items-center">
        <input
          type="text"
          placeholder="Card Title"
          value={newCardTitle}
          onChange={e => setNewCardTitle(e.target.value)}
          className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
        />
        <input
          type="text"
          placeholder="Card Description"
          value={newCardDescription}
          onChange={e => setNewCardDescription(e.target.value)}
          className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
        />
        <select
          value={selectedColumnId}
          onChange={e => setSelectedColumnId(Number(e.target.value))}
          className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2"
        >
          {board.columns.map(column => (
            <option key={column.id} value={column.id}>{column.title}</option>
          ))}
        </select>
        <button onClick={handleCardAdd} className="bg-blue-500 text-white p-2 rounded w-full sm:w-auto">
          Add Card
        </button>
      </div>
      <Board
        allowAddCard
        allowRemoveCard
        initialBoard={board}
        renderColumnHeader={(column) => (
          <div className="font-bold">{column.title}</div>
        )}
        renderCard={(card, { column }) => (
          <div className="p-2 bg-gray-200 rounded relative mb-2">
            <h3 className="font-bold">{card.title}</h3>
            <p>{card.description}</p>
            <button
              onClick={() => handleCardDelete(column.id, card.id)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded p-1"
            >
              Delete
            </button>
          </div>
        )}
      />
    </div>
  );
};



export default Kanban;

