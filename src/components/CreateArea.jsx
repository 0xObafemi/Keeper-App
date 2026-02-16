import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Box, Fab, Zoom, TextField } from '@mui/material';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function expand() {
    setExpanded(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <Box className= "create-note" component="form" onSubmit={submitNote} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {isExpanded && <TextField name="title" value={note.title} onChange={handleChange} placeholder="Title" size="small" />}
        <TextField
          name="content"
          value={note.content}
          onClick={expand}
          onChange={handleChange}
          placeholder="Take a note..."
          multiline
          minRows={isExpanded ? 3 : 1}
          size="small"
        />
        <Zoom in={isExpanded}><Fab type="submit" sx={{ alignSelf: 'flex-end' }}><AddIcon/></Fab></Zoom>
      </Box>
      {isExpanded ? null : <div className="empty">Keeper is empty</div>}
    </div>
  );
}

export default CreateArea;
