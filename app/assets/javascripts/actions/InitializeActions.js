import Dispatcher from '../_react_dispatcher.js';
import ActionTypes from '../constants/actionTypes.js';

var InitializeActions = {

  initApp() {
    console.log('InitializeActions reached');
    // $.get('api/v1/messages', function(data) { // async initialize doesnt work
var data = [{title: 'debug title', body: 'debug body'}]; // debug
      var initDatax = [data[0].title, data[0].body];
      console.log('InitializeActions API data received');

      Dispatcher.dispatch({
        actionType: ActionTypes.INITIALIZE,
        initialData: initDatax
      })
    // }.bind(this));
  }

}

export default InitializeActions;

