import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import RegisterState from '../components/RegisterState';
import DebuggerButtons from '../components/DebuggerButtons';
import ProgramInstructions from '../components/ProgramInstructions';
import * as DebuggerActions from '../actions/DebuggerActions';

export default class EmulatorApp {
  render() {
    return (
      <Connector>
        {({ emulator, dispatch }) =>
          <div>
            <ProgramInstructions {...bindActionCreators(DebuggerActions, dispatch)}/>
            <DebuggerButtons emulator={emulator}
              {...bindActionCreators(DebuggerActions, dispatch)} />
            <RegisterState registers={emulator.registers} />
          </div>
        }
      </Connector>
    );
  }
}
