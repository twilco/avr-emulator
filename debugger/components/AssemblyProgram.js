import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class RegisterState {

  render() {
    const { instructions, programPointer } = this.props;

    var assignClasses = function assignClasses(i) {
      return classnames('line', {
        'current-step': i === programPointer 
      })
    }

    return (
      <div className="program-display">
        <code>
          {instructions.map((instruction, i) =>
            <p className={assignClasses(i)}>{instruction}</p>
          )}
        </code>
      </div>
    );
  }
}
RegisterState.propTypes = {
  instructions: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  programPointer: React.PropTypes.number.isRequired,
};
