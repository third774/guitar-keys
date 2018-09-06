import { scaleFilter, chromaticScaleWithRoot, Note } from "./notes";

type Scale = number[];

export const lydianNotePositions = [0, 2, 4, 6, 7, 9, 11];
export const majorNotePositions = [0, 2, 4, 5, 7, 9, 11];
export const mixolydianNotePositions = [0, 2, 4, 5, 7, 9, 10];
export const dorianNotePositions = [0, 2, 3, 5, 7, 9, 10];
export const minorNotePositions = [0, 2, 3, 5, 7, 8, 10];
export const phrygianNotePositions = [0, 1, 3, 5, 7, 8, 10];
export const locrianNotePositions = [0, 1, 3, 5, 6, 8, 10];

export const generateScale = (rootNote: Note, scale: Scale) =>
  scaleFilter(scale)(chromaticScaleWithRoot(rootNote));

export const generateMajorScale = (note: Note) =>
  generateScale(note, majorNotePositions);

export const generateMinorScale = (note: Note) =>
  generateScale(note, minorNotePositions);
