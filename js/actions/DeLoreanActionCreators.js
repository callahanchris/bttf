var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AppConstants').ActionTypes;

module.exports = {
  accelerate: function(mph) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.ACCELERATE,
      mph: mph
    });
  }
};
