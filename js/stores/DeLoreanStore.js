var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AppConstants').ActionTypes;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _speed = 0;

var DeLoreanStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getSpeed: function() {
    return _speed;
  }
});

DeLoreanStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
  case ActionTypes.ACCELERATE:
    _accelerate();
    DeLoreanStore.emitChange();
    break;

  default:
    // noop
  }
});

function _accelerate() {
  _speed += 1;
}

module.exports = DeLoreanStore;