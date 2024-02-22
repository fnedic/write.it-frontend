/* eslint-disable react/prop-types */
import {
  ArchiveRounded,
  Delete,
  Edit,
  Unarchive,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import noNotes from "../imgs/no-notes.png";
import noArchived from "../imgs/no-archived.png";

const Notes = ({
  showArchived,
  filteredNotes,
  archived,
  openEditDialog,
  deleteNote,
  archiveNote,
  unarchiveNote,
}) => {
  return (
    <Grid container justifyContent="center" spacing={2} textAlign={"left"}>
      {(showArchived ? filteredNotes : archived) &&
        ((showArchived ? filteredNotes : archived).length !== 0 ? (
          (showArchived ? filteredNotes : archived).map((note) => (
            <Grid item key={note.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  backgroundColor: "#fbce4e",
                  boxShadow: 2,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 12,
                      whiteSpace: "pre-line",
                      overflowWrap: "break-word",
                      wordWrap: "break-word",
                      maxHeight: "100px",
                      overflow: "auto",
                      textAlign: "center",
                      mb: 1,
                    }}
                    fontFamily={"monospace"}
                    color="text.secondary"
                    gutterBottom
                  >
                    {note.category}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      whiteSpace: "pre-line",
                      overflowWrap: "break-word",
                      wordWrap: "break-word",
                      maxHeight: "100px",
                      overflow: "auto",
                    }}
                    fontFamily={"monospace"}
                  >
                    {note.title}
                  </Typography>
                  <Typography
                    sx={{
                      whiteSpace: "pre-line",
                      overflowWrap: "break-word",
                      wordWrap: "break-word",
                      maxHeight: "400px",
                      overflow: "auto",
                      mt: 1,
                    }}
                    fontSize={16}
                    color="text.secondary"
                    fontFamily={"monospace"}
                  >
                    {note.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  {showArchived ? (
                    <Tooltip title="Edit note">
                      <IconButton
                        onClick={() => {
                          openEditDialog(note.id);
                        }}
                      >
                        <Edit sx={{ color: "#7e7e7e" }} />
                      </IconButton>
                    </Tooltip>
                  ) : null}
                  <Tooltip title="Delete note">
                    <IconButton onClick={() => deleteNote(note.id)}>
                      <Delete sx={{ color: "#7e7e7e" }} />
                    </IconButton>
                  </Tooltip>
                  {showArchived ? (
                    <Tooltip title="Archive note">
                      <IconButton onClick={() => archiveNote(note.id)}>
                        <ArchiveRounded sx={{ color: "#7e7e7e" }} />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Unarchive note">
                      <IconButton onClick={() => unarchiveNote(note.id)}>
                        <Unarchive sx={{ color: "#7e7e7e" }} />
                      </IconButton>
                    </Tooltip>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              minHeight: 500,
              width: "100%",
              background: showArchived
                ? `url(${noNotes}) no-repeat center center`
                : `url(${noArchived}) no-repeat center center`,
              backgroundSize: "contain",
              filter: "invert(50%)",
            }}
          />
        ))}
    </Grid>
  );
};

export default Notes;
