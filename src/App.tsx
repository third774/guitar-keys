import * as React from "react";

import {ModeDropdown} from "components/ModeDropdown";
import {FretBoard} from "components/FretBoard";
import {Tuning} from "components/Tuning";
import {scales, generateScale} from "utils/scales";
import {Note} from "utils/notes";
import {KeySlider} from "components/KeySlider";

import "./App.css";
import {Flex} from "components/Flex";

class App extends React.Component {
  state = {
    rootNote: "C",
    mode: "major",
    tuning: [Note.E, Note.B, Note.G, Note.D, Note.A, Note.E]
  };

  handleRootChange = (rootNote: string) => this.setState({rootNote});
  handleModeChange = (mode: string) => this.setState({mode});
  handleTuningChange = (tuning: Note[]) => this.setState({tuning});

  public render() {
    const {rootNote, mode, tuning} = this.state;
    const scale = generateScale(Note[rootNote], scales[mode]);
    return (
      <div className="App">
        <h1>Guitar Key Explorer</h1>
        <Flex>
          <ModeDropdown value={mode} onChange={this.handleModeChange} />
          <KeySlider value={rootNote} onChange={this.handleRootChange} />
        </Flex>
        <Flex>
          <Tuning tuning={tuning} onChange={this.handleTuningChange} />
          <FretBoard tuning={tuning} scale={scale} />
        </Flex>
      </div>
    );
  }
}

export default App;
