import {
  scaleFilter,
  chromaticScaleWithRoot,
  Note,
  normalizeNotes
} from "./notes";

type ScalePositions = number[];

type ScaleType =
  | "lydian"
  | "major"
  | "mixolydian"
  | "dorian"
  | "minor"
  | "phrygian"
  | "locrian";

export interface Scale {
  positions: ScalePositions;
  label: string;
}

export const scales: {[k in ScaleType]: Scale} = {
  lydian: {
    label: "Lydian",
    positions: [0, 2, 4, 6, 7, 9, 11]
  },
  major: {
    label: "Major",
    positions: [0, 2, 4, 5, 7, 9, 11]
  },
  mixolydian: {
    label: "Mixolydian",
    positions: [0, 2, 4, 5, 7, 9, 10]
  },
  dorian: {
    label: "Dorian",
    positions: [0, 2, 3, 5, 7, 9, 10]
  },
  minor: {
    label: "Minor",
    positions: [0, 2, 3, 5, 7, 8, 10]
  },
  phrygian: {
    label: "Phrygian",
    positions: [0, 1, 3, 5, 7, 8, 10]
  },
  locrian: {
    label: "Locrian",
    positions: [0, 1, 3, 5, 6, 8, 10]
  }
};

export const generateScale = (rootNote: Note, scale: ScalePositions) =>
  normalizeNotes(scaleFilter(scale)(chromaticScaleWithRoot(rootNote)));
