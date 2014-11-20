var React = require('react');
var DeLoreanActionCreators = require('../actions/DeLoreanActionCreators');

var Accelerator = React.createClass({
  handleClick: function() {
    DeLoreanActionCreators.accelerate(1); // hard-coded to show how data flows through Flux
  },

  render: function() {
    return (
      <div>
        <button onClick={this.handleClick}>Activate the Flux Capacitor</button>
      </div>
    );
  }
});

module.exports = Accelerator;