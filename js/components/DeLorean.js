var React = require('react');
var DeLoreanStore = require('../stores/DeLoreanStore');
var ImageSection = require('./ImageSection');
var Accelerator = require('./Accelerator');
var Speedometer = require('./Speedometer');

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

  render: function() {
    return (
      <div>
        <ImageSection />
        <Accelerator />
        <Speedometer speed={this.state.speed} />
      </div>
    );
  },

  _onChange: function() {
    this.setState({speed: DeLoreanStore.getSpeed()})
  }
});

module.exports = DeLorean;