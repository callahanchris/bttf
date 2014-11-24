var React = require('react');
var Accelerator = require('./Accelerator');
var ImageSection = require('./ImageSection');
var Speedometer = require('./Speedometer');
var DeLoreanStore = require('../stores/DeLoreanStore');

var DeLorean = React.createClass({
  getInitialState: function() {
    return {speed: 0};
  },

  componentDidMount: function() {
    DeLoreanStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DeLoreanStore.removeChangeListener(this._onChange);
  },

  fluxCapacitorActivated: function() {
    return this.state.speed >= 88;
  },

  render: function() {
    return (
      <div className="delorean">
        <ImageSection activated={this.fluxCapacitorActivated()} />
        {this.fluxCapacitorActivated() ? '' : <Accelerator />}
        <Speedometer speed={this.state.speed} />
      </div>
    );
  },

  _onChange: function() {
    this.setState({speed: DeLoreanStore.getSpeed()})
  }
});

module.exports = DeLorean;