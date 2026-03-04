import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Card, CardContent, IconButton } from '@mui/material';

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(props.title);
  const [editContent, setEditContent] = useState(props.content);

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEditClick() {
    if (isEditing) {
      props.onEdit(props.id, editTitle, editContent);
    }
    setIsEditing(!isEditing);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setEditTitle(value);
    } else if (name === "content") {
      setEditContent(value);
    }
  }

  return (
    <Card className="note" sx={{ width: { xs: '100%', sm: '45%', md: '30%' }, m: 1, maxWidth: 320 }}>
      <CardContent>
        {isEditing ? (
          <>
            <input
              name="title"
              value={editTitle}
              onChange={handleChange}
              placeholder="Title"
            />
            <textarea
              name="content"
              value={editContent}
              onChange={handleChange}
              placeholder="Take a note..."
              rows="3"
            />
          </>
        ) : (
          <>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
          </>
        )}
        <div>
          <IconButton onClick={handleEditClick}>
            {isEditing ? <SaveIcon /> : <EditIcon />}
          </IconButton>
          <IconButton onClick={handleClick}><DeleteIcon /></IconButton>
        </div>

      </CardContent>
    </Card>
  );
}

export default Note;
