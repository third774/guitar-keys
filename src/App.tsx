import * as React from "react";
import {RootNoteDropdown} from "components/RootNoteDropdown";

import "./App.css";
import {Note} from "utils/notes";
import {scales, generateScale} from "utils/scales";
import {ModeDropdown} from "components/ModeDropdown";
import {FretBoard} from "components/FretBoard";

class App extends React.Component {
  state = {
    rootNote: "C",
    mode: "major",
    tuning: [Note.E, Note.B, Note.G, Note.D, Note.A, Note.E]
  };

  handleRootChange = (rootNote: string) => this.setState({rootNote});
  handleModeChange = (mode: string) => this.setState({mode});

  public render() {
    const {rootNote, mode, tuning} = this.state;
    const scale = generateScale(Note[rootNote], scales[mode]);
    return (
      <div className="App">
        <h1>Guitar Key Explorer</h1>
        <RootNoteDropdown value={rootNote} onChange={this.handleRootChange} />
        <ModeDropdown value={mode} onChange={this.handleModeChange} />
        <FretBoard tuning={tuning} scale={scale} />
      </div>
    );
  }
}

export default App;
