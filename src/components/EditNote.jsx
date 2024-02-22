import { Button, Dialog, DialogTitle, Stack, TextField } from "@mui/material";
import { useNote } from "../hooks/useNote";
import { useEffect } from "react";
import { useForm } from './../hooks/useForm';

// eslint-disable-next-line react/prop-types
const EditNote = ({ initialForm, noteId, openEdit, closeEditDialog, maxLengths, updateNotes }) => {
  const formFields = ["Title", "Content", "Category"];
  const { editNote, getNote, toEdit, setToEdit } = useNote();
  const { form, handleChange, setForm } = useForm(initialForm);
 
  useEffect(() => {
    getNote(noteId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId]);
  
  useEffect(() => {
    setForm(toEdit);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId, toEdit]);
  
  const handleSave = () => {
    editNote(toEdit.id, form, updateNotes);
    closeEditDialog();
  };

  return (
    <Dialog open={openEdit} onClose={closeEditDialog}>
      <DialogTitle>Edit this note:</DialogTitle>
      {form && (
        <>
          {formFields.map((field) => (
            <TextField
              key={field}
              label={field}
              size="small"
              value={form[field.toLowerCase()]}
              id={field.toLowerCase()}
              name={field.toLowerCase()}
              onChange={handleChange}
              sx={{ my: 1, mx: 2, width: 240 }}
              multiline
              inputProps={{ maxLength: maxLengths[field] }}
            />
          ))}
        </>
      )}
      <Stack direction={"row"} justifyContent={"right"} mr={2}>
        <Button
          sx={{ mt: 1, mb: 1, maxWidth: "40%" }}
          onClick={() => {
            setToEdit(initialForm);
            closeEditDialog();
          }}
        >
          close
        </Button>
        <Button
          type="submit"
          sx={{ mt: 1, mb: 1, maxWidth: "40%" }}
          onClick={() => handleSave()}
        >
          Save
        </Button>
      </Stack>
    </Dialog>
  );
};

export default EditNote;
