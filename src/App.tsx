import * as React from "react";

import {ModeDropdown} from "components/ModeDropdown";
import {FretBoard} from "components/FretBoard";
import {Tuning} from "components/Tuning";
import {scales, generateScale} from "utils/scales";
import {Note} from "utils/notes";
import {KeySlider} from "components/KeySlider";

import {Title} from "components/Title";
import styled from "styled-components";
import {InstrumentType, instruments} from "utils/Instrument";
import {InstrumentDropdown} from "components/InstrumentDropdown";

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr;
  grid-template-rows: 1fr 4fr;
`;

class App extends React.Component {
  state = {
    instrumentType: InstrumentType.guitar,
    rootNote: "C",
    mode: "major",
    tuning: [Note.E, Note.B, Note.G, Note.D, Note.A, Note.E]
  };

  handleRootChange = (rootNote: string) => this.setState({rootNote});
  handleModeChange = (mode: string) => this.setState({mode});
  handleTuningChange = (tuning: Note[]) => this.setState({tuning});
  handleInstrumentChange = (instrumentType: InstrumentType) => {
    const instrument = instruments.find(i => i.type === instrumentType);
    if (instrument) {
      this.setState({
        instrumentType,
        tuning: instrument.stringConfiguration
      });
    }
  };

  public render() {
    const {rootNote, mode, tuning} = this.state;
    const scale = generateScale(Note[rootNote], scales[mode]);
    return (
      <Container>
        <Title>Guitar Key Map</Title>
        <InstrumentDropdown onChange={this.handleInstrumentChange} />
        <Layout>
          <ModeDropdown value={mode} onChange={this.handleModeChange} />
          <KeySlider value={rootNote} onChange={this.handleRootChange} />
          <Tuning tuning={tuning} onChange={this.handleTuningChange} />
          <FretBoard tuning={tuning} scale={scale} />
        </Layout>
      </Container>
    );
  }
}

export default App;
