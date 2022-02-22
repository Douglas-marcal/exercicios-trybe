const Redux = require('redux');

const signInAction = (email) => ({
  type: 'LOGIN',
  email,
});

const INITIAL_STATE = {
  login: false,
  email: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        login: !state.login,
        email: action.email
      }
  
    default:
      return state;
  }
};


const store = Redux.createStore(reducer);

store.dispatch(signInAction('douglas@teste.com'));


console.log(store.getState());
