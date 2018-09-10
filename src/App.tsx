import * as React from "react";
import {GuitarString} from "components/GuitarString";
import {RootNoteDropdown} from "components/RootNoteDropdown";

import "./App.css";
import {Note} from "utils/notes";
import {scales, generateScale} from "utils/scales";
import {ModeDropdown} from "components/ModeDropdown";

class App extends React.Component {
  state = {
    rootNote: "C",
    mode: "major"
  };

  handleRootChange = (rootNote: string) => this.setState({rootNote});

  handleModeChange = (mode: string) => this.setState({mode});

  public render() {
    const {rootNote, mode} = this.state;
    const scale = generateScale(Note[rootNote], scales[mode].positions);
    return (
      <div className="App">
        <RootNoteDropdown value={rootNote} onChange={this.handleRootChange} />
        <ModeDropdown value={mode} onChange={this.handleModeChange} />
        <GuitarString notes={scale} rootNote={Note.E} />
        <GuitarString notes={scale} rootNote={Note.B} />
        <GuitarString notes={scale} rootNote={Note.G} />
        <GuitarString notes={scale} rootNote={Note.D} />
        <GuitarString notes={scale} rootNote={Note.A} />
        <GuitarString notes={scale} rootNote={Note.E} />
      </div>
    );
  }
}

export default App;
