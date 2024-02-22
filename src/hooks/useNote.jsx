/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import NoteService from "../services/axios/NoteService";

export const useNote = (form) => {
  const [notes, setNotes] = useState();
  const [archived, setArchived] = useState();
  const [toEdit, setToEdit] = useState();
  const [ categories, setCategories] = useState();

  const onCreate = async () => {
    await NoteService.createNote(form);
    getUnarchivedNotes();
  };
  const getUnarchivedNotes = async () => {
    const response = await NoteService.getUnarchivedNotes();
    const updatedNotes = response.data;
    setNotes(updatedNotes);
  };

  const getArchivedNotes = async () => {
    const response = await NoteService.getArchivedNotes();
    const updatedNotes = response.data;
    setArchived(updatedNotes);
  };

  const deleteNote = async (id) => {
    await NoteService.deleteNote(id)
      .then(() => {
        getUnarchivedNotes();
        getArchivedNotes();
      })
      .catch((err) => console.log(err));
  };

  const getNote = (id) => {
    NoteService.getNote(id)
      .then((response) => setToEdit(response.data))
      .catch((err) => console.log(err));
  };

  const editNote = async (id, note, updateNotes) => {
    await NoteService.editNote(id, note)
      .then(() => {
        updateNotes();
      })
      .catch((err) => console.log(err));
  };

  const archiveNote = async (id) => {
    await NoteService.archiveNote(id)
      .then(() => {
        getUnarchivedNotes();
        getArchivedNotes();
      })
      .catch((err) => console.log(err));
  };

  const unarchiveNote = async (id) => {
    await NoteService.unarchiveNote(id)
      .then(() => {
        getUnarchivedNotes();
        getArchivedNotes();
      })
      .catch((err) => console.log(err));
  };

  const getCategories = async () => {
    await NoteService.getCategories()
    .then((response) => {setCategories(response.data);})
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUnarchivedNotes();
  }, []);

  useEffect(() => {
    getArchivedNotes();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  return {
    onCreate,
    notes,
    archived,
    deleteNote,
    getNote,
    toEdit,
    setToEdit,
    editNote,
    getUnarchivedNotes,
    archiveNote,
    getArchivedNotes,
    unarchiveNote,
    getCategories,
    categories
  };
};
