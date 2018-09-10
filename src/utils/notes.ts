import {shiftToBack} from "utils/shiftToBack";

export type NoteType = NaturalNote | NonNaturalNote;

export interface NaturalNote {
  type: "natural";
  note: Note;
  label: string;
  distanceFromRoot: number;
  inKey: boolean;
}

export interface NonNaturalNote {
  type: "non-natural";
  sharpNote: Note;
  sharpLabel: string;
  flatNote: Note;
  flatLabel: string;
  distanceFromRoot: number;
  inKey: boolean;
}

export interface NormalizedNote {
  note: Note;
  label: string;
  distanceFromRoot: number;
  inKey: boolean;
}

export enum Note {
  A,
  Aflat,
  Asharp,
  B,
  Bflat,
  C,
  Csharp,
  D,
  Dflat,
  Dsharp,
  E,
  Eflat,
  F,
  Fsharp,
  Fflat,
  G,
  Gsharp,
  Gflat
}

export const chromaticScaleWithRootC: NoteType[] = [
  {
    type: "natural",
    label: "C",
    note: Note.C,
    distanceFromRoot: 0,
    inKey: true
  },
  {
    type: "non-natural",
    sharpLabel: "C♯",
    sharpNote: Note.Csharp,
    flatLabel: "D♭",
    flatNote: Note.Dflat,
    distanceFromRoot: 1,
    inKey: true
  },
  {
    type: "natural",
    label: "D",
    note: Note.D,
    distanceFromRoot: 2,
    inKey: true
  },
  {
    type: "non-natural",
    sharpLabel: "D♯",
    sharpNote: Note.Dsharp,
    flatLabel: "E♭",
    flatNote: Note.Eflat,
    distanceFromRoot: 3,
    inKey: true
  },
  {
    type: "natural",
    label: "E",
    note: Note.E,
    distanceFromRoot: 4,
    inKey: true
  },
  {
    type: "natural",
    label: "F",
    note: Note.F,
    distanceFromRoot: 5,
    inKey: true
  },
  {
    type: "non-natural",
    sharpLabel: "F♯",
    sharpNote: Note.Fsharp,
    flatLabel: "G♭",
    flatNote: Note.Gflat,
    distanceFromRoot: 6,
    inKey: true
  },
  {
    type: "natural",
    label: "G",
    note: Note.G,
    distanceFromRoot: 7,
    inKey: true
  },
  {
    type: "non-natural",
    sharpLabel: "G♯",
    sharpNote: Note.Gsharp,
    flatLabel: "A♭",
    flatNote: Note.Aflat,
    distanceFromRoot: 8,
    inKey: true
  },
  {
    type: "natural",
    label: "A",
    note: Note.A,
    distanceFromRoot: 9,
    inKey: true
  },
  {
    type: "non-natural",
    sharpLabel: "A♯",
    sharpNote: Note.Asharp,
    flatLabel: "B♭",
    flatNote: Note.Bflat,
    distanceFromRoot: 10,
    inKey: true
  },
  {
    type: "natural",
    label: "B",
    note: Note.B,
    distanceFromRoot: 11,
    inKey: true
  }
];

export const findIndexOfNote = (note: Note, notes: NoteType[]) =>
  notes.findIndex(
    n =>
      (n.type === "natural" && n.note === note) ||
      (n.type === "non-natural" &&
        (n.sharpNote === note || n.flatNote === note))
  );

export const chromaticScaleWithRoot = (note: Note): NoteType[] => {
  return shiftToBack(
    findIndexOfNote(note, chromaticScaleWithRootC),
    chromaticScaleWithRootC
  );
};

export const scaleFilter = (scalePositions: number[]) => (
  chromaticScale: NoteType[]
) => {
  return chromaticScale.map((n, i) => ({
    ...n,
    distanceFromRoot: i,
    inKey: scalePositions.includes(i)
  }));
};

export const normalizeNotes = (
  notes: Array<NaturalNote | NonNaturalNote>,
  nonNaturalAccessor: "sharp" | "flat" = "sharp"
): NormalizedNote[] =>
  notes.map(n => ({
    ...n,
    label: n.type === "natural" ? n.label : n[`${nonNaturalAccessor}Label`],
    note: n.type === "natural" ? n.note : n[`${nonNaturalAccessor}Note`]
  }));
