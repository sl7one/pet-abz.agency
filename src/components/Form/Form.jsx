import { useReducer } from 'react';
import { FORM__STATE, reducer } from '../../reducer/form/formReduser';
import { Button, Input, InputsField } from 'styled-components/styled';

export const Form = () => {
  const [state, dispatch] = useReducer(reducer, FORM__STATE);

  const onChange = ({ target }) => {
    const { name, value } = target;
    dispatch({ type: 'SET_FORM_DATA', payload: { [name]: value } });
  };

  const onBlur = ({ target }) => {
    const { name } = target;
    dispatch({ type: 'CHECK__INPUT', payload: name });
  };

  const onSubmit = evt => {
    console.log('object');
    evt.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <InputsField>
        <label htmlFor="name">
          <Input
            type="text"
            name="name"
            id="name"
            value={state.name}
            placeholder="Your name"
            onChange={onChange}
            onBlur={onBlur}
            isValid={state.nameIsValid}
          />
          <p>{state.nameIsValid ? '' : 'Set name field'}</p>
        </label>

        <label htmlFor="email">
          <Input
            type="email"
            name="email"
            id="email"
            value={state.email}
            placeholder="Email"
            onChange={onChange}
            onBlur={onBlur}
            isValid={state.emailIsValid}
          />
          <p>{state.emailIsValid ? '' : 'Set email field'}</p>
        </label>

        <label htmlFor="phone">
          <Input
            type="text"
            name="phone"
            id="phone"
            value={state.phone}
            placeholder="Phone"
            onChange={onChange}
            onBlur={onBlur}
            isValid={state.phoneIsValid}
          />
          <p>{state.phoneIsValid ? '' : 'Set phone field'}</p>
        </label>
      </InputsField>
      <div>
        <p>Select your position</p>
        <div>
          <input type="radio" id="front" name="front" value="front" />
          <label htmlFor="front">Frontend developer</label>

          <input type="radio" id="back" name="back" value="back" />
          <label htmlFor="back">Backend developer</label>

          <input type="radio" id="designer" name="designer" value="designer" />
          <label htmlFor="designer">Designer</label>

          <input type="radio" id="qa" name="qa" value="qa" />
          <label htmlFor="qa">QA</label>
        </div>
      </div>
      <Button type="submit" disabled={false}>
        Sign up
      </Button>
    </form>
  );
};
