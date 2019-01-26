import {Note} from "./notes";

export enum InstrumentType {
  guitar,
  bass,
  ukulele
}

interface Instrument {
  type: InstrumentType;
  label: string;
  stringConfiguration: Note[];
}

export const instruments: Instrument[] = [
  {
    type: InstrumentType.guitar,
    label: "Guitar",
    stringConfiguration: [Note.E, Note.B, Note.G, Note.D, Note.A, Note.E]
  },
  {
    type: InstrumentType.bass,
    label: "Bass",
    stringConfiguration: [Note.G, Note.D, Note.A, Note.E]
  },
  {
    type: InstrumentType.ukulele,
    label: "Ukulele",
    stringConfiguration: [Note.A, Note.E, Note.C, Note.G]
  }
];
