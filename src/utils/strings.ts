import {Note, NoteType, findIndexOfNote} from "./notes";
import {shiftToBack} from "./shiftToBack";

export const stringInKeyGenerator = (keyNotes: NoteType[]) => (
  stringRootNote: Note
): NoteType[] => {
  return shiftToBack(findIndexOfNote(stringRootNote, keyNotes), keyNotes);
};
