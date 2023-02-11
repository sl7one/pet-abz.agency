export const FORM__STATE = {
  name: '',
  phone: '',
  email: '',
  formIsValid: true,
  nameIsValid: 'init',
  emailIsValid: 'init',
  phoneIsValid: 'init',
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_FORM_DATA':
      return { ...state, ...payload };
    case 'CHECK__INPUT':
      switch (payload) {
        case 'name':
          if (state.name.length >= 3 && state.name.length <= 30) {
            return { ...state, nameIsValid: true };
          } else {
            return { ...state, nameIsValid: false };
          }
        case 'email':
          if (state.email.length >= 3 && state.email.length <= 30) {
            return { ...state, emailIsValid: true };
          } else {
            return { ...state, emailIsValid: false };
          }
        case 'phone':
          if (state.phone.length >= 3 && state.phone.length <= 30) {
            return { ...state, phoneIsValid: true };
          } else {
            return { ...state, phoneIsValid: false };
          }
        default:
          return state;
      }
    default:
      return state;
  }
};
