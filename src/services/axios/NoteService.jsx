import axios from "axios";

const baseURL = "http://localhost:8080";

class NoteService {
  createNote(form) {
    return axios.post(baseURL + "/create-note", form);
  }

  getUnarchivedNotes() {
    return axios.get(baseURL + "/get-unarchived");
  }

  getArchivedNotes() {
    return axios.get(baseURL + "/get-archived");
  }

  getNote(id) {
    return axios.get(baseURL + "/get-note/" + id);
  }

  editNote(id, note) {
    return axios.put(baseURL + "/edit-note/" + id, note);
  }

  deleteNote(id) {
    return axios.delete(baseURL + "/delete-note/" + id);
  }

  archiveNote(id) {
    return axios.put(baseURL + "/archive-note/" + id)
  }

  unarchiveNote(id) {
    return axios.put(baseURL + "/unarchive-note/" + id)
  }
}

const instance = new NoteService();
export default instance;
