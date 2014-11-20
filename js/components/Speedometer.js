var React = require('react');

var Speedometer = React.createClass({
  message: function() {
    if (this.props.speed < 88) {
      return (
        <div>
          <h1>{this.props.speed} mph</h1>
          <p>Don't worry. As long as you hit that wire with the connecting hook at precisely 88 miles per hour, the instant the lightning strikes the tower... everything will be fine.</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>88 mph</h1>
          <h3>It works! It works! I finally invent something that works!</h3>
        </div>
      );
    }
  },

  render: function() {
    return this.message();
  }
});

module.exports = Speedometer;
