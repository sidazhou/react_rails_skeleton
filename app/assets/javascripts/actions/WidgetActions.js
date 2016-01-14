import Dispatcher from '../_react_dispatcher.js';
import ActionTypes from '../constants/actionTypes.js';

var WidgetActions = {

  changeWidget3data() {
    console.log('WidgetActions reached');
    $.get('api/v1/messages', function(data) {
      var initData = [data[0].created_at, data[0].id];
      console.log('api data received');

      Dispatcher.dispatch({
        actionType: ActionTypes.CHANGE_WIDGET3_DATA,
        myData: initData
      });
    }.bind(this));
  }

}

export default WidgetActions;

