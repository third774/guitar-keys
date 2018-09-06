export type NoteType = NaturalNote | NonNaturalNote;

interface NaturalNote {
  type: "natural";
  note: Note;
  label: string;
}

interface NonNaturalNote {
  type: "non-natural";
  sharpNote: Note;
  sharpLabel: string;
  flatNote: Note;
  flatLabel: string;
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

export const notes: NoteType[] = [
  {
    type: "natural",
    label: "C",
    note: Note.C
  },
  {
    type: "non-natural",
    sharpLabel: "C♯",
    sharpNote: Note.Csharp,
    flatLabel: "D♭",
    flatNote: Note.Dflat
  },
  {
    type: "natural",
    label: "D",
    note: Note.D
  },
  {
    type: "non-natural",
    sharpLabel: "D♯",
    sharpNote: Note.Dsharp,
    flatLabel: "E♭",
    flatNote: Note.Eflat
  },
  {
    type: "natural",
    label: "E",
    note: Note.E
  },
  {
    type: "natural",
    label: "F",
    note: Note.F
  },
  {
    type: "non-natural",
    sharpLabel: "F♯",
    sharpNote: Note.Fsharp,
    flatLabel: "G♭",
    flatNote: Note.Gflat
  },
  {
    type: "natural",
    label: "G",
    note: Note.G
  },
  {
    type: "non-natural",
    sharpLabel: "G♯",
    sharpNote: Note.Gsharp,
    flatLabel: "A♭",
    flatNote: Note.Aflat
  },
  {
    type: "natural",
    label: "A",
    note: Note.A
  },
  {
    type: "non-natural",
    sharpLabel: "A♯",
    sharpNote: Note.Asharp,
    flatLabel: "B♭",
    flatNote: Note.Bflat
  },
  {
    type: "natural",
    label: "B",
    note: Note.B
  }
];

export const offsetBy = (num: number) => {
  const adjusted = num % 12;
  const [back, front] = [notes.slice(0, adjusted), notes.slice(adjusted)];
  return [...front, ...back];
};

const matchesNote = (note: Note) => (n: NoteType): boolean =>
  (n.type === "natural" && n.note === note) ||
  (n.type === "non-natural" && (n.sharpNote === note || n.flatNote === note));

export const chromaticScaleWithRoot = (note: Note): NoteType[] => {
  return offsetBy(notes.findIndex(matchesNote(note)));
};

export const scaleFilter = (scalePositions: number[]) => (
  chromaticScale: NoteType[]
) => {
  return chromaticScale
    .map((n, i) => ({ ...n, distanceFromRoot: i }))
    .filter(n => scalePositions.includes(n.distanceFromRoot));
};
