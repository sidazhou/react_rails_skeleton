const namespace = 'WidgetsTry2/';

const INCREMENT = namespace + 'INCREMENT';
const DECREMENT = namespace + 'DECREMENT';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}
