import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardContent, Typography, IconButton } from '@mui/material';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Card className="note" sx={{ width: { xs: '100%', sm: '45%', md: '30%' }, m: 1, maxWidth: 320 }}>
      <CardContent>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <IconButton onClick={handleClick}><DeleteIcon/></IconButton>
      </CardContent>
    </Card>
  );
}

export default Note;
