var React = require('react');

var ImageSection = React.createClass({
  render: function() {
    return (
      <div className='image-section'>
        {this.props.activated ?
          <img src="img/6983298944_9f55d1ee2c_z.jpg" /> :
          <p>"If my calculations are correct, when this baby hits 88 miles per hour... you're gonna see some serious shit."</p>
        }
      </div>
    );
  }
});

module.exports = ImageSection;
