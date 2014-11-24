var React = require('react');

var Speedometer = React.createClass({
  message: function() {
    if (this.props.speed < 88) {
      return (
        <p>Don't worry. As long as you hit that wire with the connecting hook at precisely 88 miles per hour, the instant the lightning strikes the tower... everything will be fine.</p>
      );
    } else {
      return (
        <h3>It works! It works! I finally invent something that works!</h3>
      );
    }
  },

  render: function() {
    return (
      <div className='speedometer'>
        <h1>{this.props.speed < 10 ? '0' + this.props.speed : this.props.speed} mph</h1>
        {this.message()}
      </div>
    );
  }
});

module.exports = Speedometer;
