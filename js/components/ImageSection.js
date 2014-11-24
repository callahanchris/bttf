var React = require('react');

var ImageSection = React.createClass({
  render: function() {
    return (
      <div className='image-section'>
        <img src="https://www.flickr.com/photos/anieto2k/6983298944" />
        <p>"If my calculations are correct, when this baby hits 88 miles per hour... you're gonna see some serious shit."</p>
      </div>
    );
  }
});

module.exports = ImageSection;
