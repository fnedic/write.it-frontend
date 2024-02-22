/* eslint-disable react/prop-types */
import { Button, Dialog, DialogTitle, Stack, TextField } from "@mui/material";

const CreateNote = ({open, closeDialog, formFields, handleChange, maxLengths, onCreate}) => {
  return (
    <Dialog open={open} onClose={closeDialog}>
      <DialogTitle>Add a note:</DialogTitle>
      {formFields.map((field) => (
        <TextField
          key={field}
          label={field}
          size="small"
          id={field.toLowerCase()}
          name={field.toLowerCase()}
          onChange={handleChange}
          multiline
          inputProps={{ maxLength: maxLengths[field] }}
          sx={{ my: 1, mx: 3, width: 240 }}
        />
      ))}
      <Stack direction={"row"} justifyContent={"right"} mr={2}>
        <Button
          sx={{ mt: 1, mb: 1, maxWidth: "40%" }}
          onClick={() => closeDialog()}
        >
          close
        </Button>
        <Button
          type="submit"
          sx={{ mt: 1, mb: 1, maxWidth: "40%" }}
          onClick={() => {
            onCreate();
            closeDialog();
          }}
        >
          Save
        </Button>
      </Stack>
    </Dialog>
  );
};

export default CreateNote;
