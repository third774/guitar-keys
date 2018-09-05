export type Note = NaturalNote | ChromaticNote;

interface NaturalNote {
  type: "natural";
  note: Notes;
  label: string;
}

interface ChromaticNote {
  type: "chromatic";
  sharpNote: Notes;
  sharpLabel: string;
  flatNote: Notes;
  flatLabel: string;
}

export enum Notes {
  A,
  B,
  C,
  D,
  E,
  F,
  G
}

export const notes: Note[] = [
  {
    type: "natural",
    label: "C",
    note: Notes.C
  },
  {
    type: "chromatic",
    sharpLabel: "C#",
    sharpNote: Notes.C,
    flatLabel: "D♭",
    flatNote: Notes.D
  },
  {
    type: "natural",
    label: "D",
    note: Notes.D
  },
  {
    type: "chromatic",
    sharpLabel: "D#",
    sharpNote: Notes.D,
    flatLabel: "E♭",
    flatNote: Notes.E
  },
  {
    type: "natural",
    label: "E",
    note: Notes.E
  },
  {
    type: "natural",
    label: "F",
    note: Notes.F
  },
  {
    type: "chromatic",
    sharpLabel: "F#",
    sharpNote: Notes.F,
    flatLabel: "G♭",
    flatNote: Notes.G
  },
  {
    type: "natural",
    label: "G",
    note: Notes.G
  },
  {
    type: "chromatic",
    sharpLabel: "G#",
    sharpNote: Notes.G,
    flatLabel: "A♭",
    flatNote: Notes.A
  },
  {
    type: "natural",
    label: "A",
    note: Notes.A
  },
  {
    type: "chromatic",
    sharpLabel: "A#",
    sharpNote: Notes.A,
    flatLabel: "B♭",
    flatNote: Notes.B
  },
  {
    type: "natural",
    label: "B",
    note: Notes.B
  }
];

export const offsetBy = (num: number) => {
  const adjusted = num % 12;
  const [back, front] = [notes.slice(0, adjusted), notes.slice(adjusted)];
  return [...front, ...back];
};
