import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardContent, Typography, IconButton } from '@mui/material';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Card className="note" sx={{ width: 320, m: 1 }}>
      <CardContent>
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="body2">{props.content}</Typography>
        <IconButton onClick={handleClick}><DeleteIcon/></IconButton>
      </CardContent>
    </Card>
  );
}

export default Note;
