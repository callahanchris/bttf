var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AppConstants').ActionTypes;

module.exports = {
  accelerate: function() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.ACCELERATE
    });
  }
};
