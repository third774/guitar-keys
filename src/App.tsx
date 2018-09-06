import * as React from "react";
import { GuitarString } from "components/GuitarString";
import {
  generateScale,
  majorNotePositions,
  minorNotePositions,
  lydianNotePositions,
  mixolydianNotePositions,
  dorianNotePositions,
  phrygianNotePositions,
  locrianNotePositions
} from "utils/scales";

console.log("D Minor", generateScale(Note.D, minorNotePositions));
console.log("D Major", generateScale(Note.D, majorNotePositions));
console.log("D Lydian", generateScale(Note.D, lydianNotePositions));
console.log("C Mixolydian", generateScale(Note.C, mixolydianNotePositions));
console.log(
  "C dorianNotePositions",
  generateScale(Note.Aflat, dorianNotePositions)
);
console.log(
  "C phrygianNotePositions",
  generateScale(Note.C, phrygianNotePositions)
);
console.log(
  "C locrianNotePositions",
  generateScale(Note.C, locrianNotePositions)
);

import "./App.css";
import { Note } from "utils/notes";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <GuitarString />
      </div>
    );
  }
}

export default App;
