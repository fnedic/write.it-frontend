import {
  Box,
  Container,
  Grid,
  InputAdornment,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  TextField,
} from "@mui/material";
import { useForm } from "../hooks/useForm";
import { useNote } from "../hooks/useNote";
import { Add, AddCircle, Archive, Note, Search } from "@mui/icons-material";
import { useState } from "react";
import EditNote from "./EditNote";
import Notes from "./Notes";
import CreateNote from "./CreateNote";

const Main = () => {
  const formFields = ["Title", "Content", "Category"];
  const initialForm = {
    title: "",
    content: "",
  };
  const maxLengths = {
    Title: 25,
    Content: 300,
    Category: 20,
  };
  const { handleChange, form } = useForm(initialForm);
  const {
    onCreate,
    notes,
    deleteNote,
    archiveNote,
    archived,
    unarchiveNote,
    getUnarchivedNotes,
    showSnackbar,
    snackbarMessage,
    handleCloseSnackbar
  } = useNote(form);
  const [open, setOpen] = useState(false);
  const [openEdit, setEditOpen] = useState(false);
  const [noteId, setNoteId] = useState();
  const [showArchived, setShowArchived] = useState(true);
  const openEditDialog = (id) => {
    setNoteId(id);
    setEditOpen(true);
  };
  const closeEditDialog = () => setEditOpen(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  const toggleArchived = () => {
    setShowArchived(true);
  };
  const toggleNotes = () => {
    setShowArchived(false);
  };
  const actions = [
    { icon: <Add />, name: "Add note", onClick: openDialog },
    { icon: <Note />, name: "My notes", onClick: toggleArchived },
    { icon: <Archive />, name: "Archived notes", onClick: toggleNotes },
  ];
  const updateNotes = () => {
    getUnarchivedNotes();
  };
  const [searchText, setSearchText] = useState("");
  const filteredNotes =
    notes &&
    notes.filter((n) =>
      n.category.toLowerCase().includes(searchText.toLowerCase())
    );
  return (
    <Box sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}>
      <Container sx={{ my: 1, minHeight: 500, textAlign: "center" }}>
        {showArchived && notes && notes.length !== 0 ? (
          <Grid item container justifyContent={"center"}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search by category..."
              variant="outlined"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{ mb: 3, maxWidth: 500 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        ) : null}
        <Notes
          showArchived={showArchived}
          filteredNotes={filteredNotes}
          archived={archived}
          openEditDialog={openEditDialog}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          unarchiveNote={unarchiveNote}
        />
        <Box sx={{ position: "fixed", bottom: "40px", right: "40px" }}>
          <SpeedDial
            ariaLabel="Options"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<AddCircle />} />}
            ButtonProps={{ sx: { color: "#ffffff" } }}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={action.onClick}
              />
            ))}
          </SpeedDial>
        </Box>
        <CreateNote
          open={open}
          closeDialog={closeDialog}
          formFields={formFields}
          handleChange={handleChange}
          maxLengths={maxLengths}
          onCreate={onCreate}
          showSnackbar={showSnackbar}
          snackbarMessage={snackbarMessage}
          handleCloseSnackbar={handleCloseSnackbar}
        />
        {noteId && (
          <EditNote
            initialForm={initialForm}
            openEdit={openEdit}
            closeEditDialog={closeEditDialog}
            noteId={noteId}
            maxLengths={maxLengths}
            updateNotes={updateNotes}
          />
        )}
      </Container>
    </Box>
  );
};

export default Main;
