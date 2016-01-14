import Dispatcher from '../_react_dispatcher.js';
import ActionTypes from '../constants/actionTypes.js';
import { EventEmitter } from 'events';

// var pvtMyData = ['storeDefault1', 'storeDefault2'];
var pvtMyData;

var WidgetStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },

  emitChange() {
    this.emit('change');
  },

  getMyData() {
    return pvtMyData;
  }

});

Dispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.INITIALIZE:
      console.log('IM DA STORE!! INITIALIZE');
      console.log(action.initialData);
      pvtMyData = action.initialData;
      WidgetStore.emitChange();
      break;
    case ActionTypes.CHANGE_WIDGET3_DATA:
      console.log('IM DA STORE!! CHANGE_WIDGET3_DATA');
      console.log(action.myData);
      pvtMyData = action.myData;
      WidgetStore.emitChange();
      break;
    default:
      //
  }
})

export default WidgetStore;



