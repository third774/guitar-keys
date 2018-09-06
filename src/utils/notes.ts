export type NoteType = NaturalNote | NonNaturalNote;

interface NaturalNote {
  type: "natural";
  note: Note;
  label: string;
  distanceFromRoot: number;
}

interface NonNaturalNote {
  type: "non-natural";
  sharpNote: Note;
  sharpLabel: string;
  flatNote: Note;
  flatLabel: string;
  distanceFromRoot: number;
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
    distanceFromRoot: 0
  },
  {
    type: "non-natural",
    sharpLabel: "C♯",
    sharpNote: Note.Csharp,
    flatLabel: "D♭",
    flatNote: Note.Dflat,
    distanceFromRoot: 1
  },
  {
    type: "natural",
    label: "D",
    note: Note.D,
    distanceFromRoot: 2
  },
  {
    type: "non-natural",
    sharpLabel: "D♯",
    sharpNote: Note.Dsharp,
    flatLabel: "E♭",
    flatNote: Note.Eflat,
    distanceFromRoot: 3
  },
  {
    type: "natural",
    label: "E",
    note: Note.E,
    distanceFromRoot: 4
  },
  {
    type: "natural",
    label: "F",
    note: Note.F,
    distanceFromRoot: 5
  },
  {
    type: "non-natural",
    sharpLabel: "F♯",
    sharpNote: Note.Fsharp,
    flatLabel: "G♭",
    flatNote: Note.Gflat,
    distanceFromRoot: 6
  },
  {
    type: "natural",
    label: "G",
    note: Note.G,
    distanceFromRoot: 7
  },
  {
    type: "non-natural",
    sharpLabel: "G♯",
    sharpNote: Note.Gsharp,
    flatLabel: "A♭",
    flatNote: Note.Aflat,
    distanceFromRoot: 8
  },
  {
    type: "natural",
    label: "A",
    note: Note.A,
    distanceFromRoot: 9
  },
  {
    type: "non-natural",
    sharpLabel: "A♯",
    sharpNote: Note.Asharp,
    flatLabel: "B♭",
    flatNote: Note.Bflat,
    distanceFromRoot: 10
  },
  {
    type: "natural",
    label: "B",
    note: Note.B,
    distanceFromRoot: 11
  }
];

export const offsetBy = (num: number) => {
  const adjusted = num % 12;
  const [back, front] = [
    chromaticScaleWithRootC.slice(0, adjusted),
    chromaticScaleWithRootC.slice(adjusted)
  ];
  return [...front, ...back];
};

export const chromaticScaleWithRoot = (note: Note): NoteType[] => {
  return offsetBy(
    chromaticScaleWithRootC.findIndex(
      n =>
        (n.type === "natural" && n.note === note) ||
        (n.type === "non-natural" &&
          (n.sharpNote === note || n.flatNote === note))
    )
  );
};

export const scaleFilter = (scalePositions: number[]) => (
  chromaticScale: NoteType[]
) => {
  return chromaticScale
    .map((n, i) => ({ ...n, distanceFromRoot: i }))
    .filter(n => scalePositions.includes(n.distanceFromRoot));
};
