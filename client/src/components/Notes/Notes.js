import React from 'react';
import { useSelector } from 'react-redux';

import Note from './Note/Note';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  console.log(notes);

  return (
    <React.Fragment>
      <h2>NOTES</h2>
      <Note />
      <Note />
      <Note />
    </React.Fragment>
  )
};

export default Notes;
