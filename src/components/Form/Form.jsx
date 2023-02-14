import {
  ErrorText,
  FormBtn,
  Input,
  InputsField,
  Label,
  PhoneInputComponent,
  RadioInput,
  RadioItemWrap,
  RadioLabel,
  RadioList,
  TextForm,
  UploadFile,
  UploadInput,
  UploadLabel,
  UploadWrapper,
  UserForm,
} from 'styled-components/styled';
import store from 'store';
import { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { API__POST__USER, API__TOKEN } from 'API/API';

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: null,
    file: null,
    formIsValid: false,
    nameIsValid: 'init',
    emailIsValid: 'init',
    phoneIsValid: 'init',
    positionIsValid: false,
    fileIsValid: false,
  });
  const [err, setError] = useState('');

  const {
    name: userName,
    email,
    phone,
    position,
    file,
    nameIsValid,
    emailIsValid,
    phoneIsValid,
    formIsValid,
    fileIsValid,
  } = formData;

  useEffect(() => {
    let nameIsValid,
      emailIsValid,
      phoneIsValid,
      positionIsValid,
      fileIsValid = null;

    if (userName.length === 0) {
      nameIsValid = 'init';
    } else {
      nameIsValid =
        userName.length >= 2 && userName.length <= 60 ? 'true' : 'false';
    }

    if (email.length === 0) {
      emailIsValid = 'init';
    } else {
      const EMAIL_REGEXP =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
      emailIsValid = EMAIL_REGEXP.test(email) ? 'true' : 'false';
    }

    if (!phone) {
      phoneIsValid = 'init';
    } else {
      phoneIsValid = phone.length === 13 ? 'true' : 'false';
    }

    if (position) positionIsValid = 'true';

    if (!file) {
      fileIsValid = 'init';
    } else if (file?.type === 'image/jpeg' && file?.size / 1024 / 1024 < 5) {
      fileIsValid = 'true';
    } else {
      fileIsValid = 'false';
    }

    const formIsValid =
      nameIsValid === 'true' &&
      emailIsValid === 'true' &&
      phoneIsValid === 'true' &&
      positionIsValid === 'true' &&
      fileIsValid === 'true'
        ? false
        : true;

    setFormData(prev => ({
      ...prev,
      nameIsValid,
      emailIsValid,
      phoneIsValid,
      formIsValid,
      positionIsValid,
      fileIsValid,
    }));
  }, [userName, email, position, phone, file]);

  useEffect(() => {
    const token = store.get('token');
    if (token) return;

    async function getToken() {
      try {
        const response = await API__TOKEN();
        store.set('token', { token: response.token });
        console.log('token__saved');
      } catch (e) {
        console.log(e.message);
      } finally {
      }
    }
    getToken();
  }, []);

  useEffect(() => {
    if (!err) return;
    console.log('error');
    // async function getToken() {
    //   try {
    //     const response = await API__TOKEN();
    //     store.set('token', { token: response.token });
    //     console.log('token__saved. New TOKEN~');
    //   } catch (e) {
    //     console.log(e.message);
    //   } finally {
    //   }
    // }
    // getToken();
    setError('');
  }, [err]);

  const onChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'name' && value.length > 60) return;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onChangePhone = phone => {
    setFormData(prev => ({ ...prev, phone }));
  };

  const onFileChange = ({ target }) => {
    const file = target.files[0];
    setFormData(prev => ({ ...prev, file }));
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('position_id', position);
    formData.append('name', userName);
    formData.append('email', email);
    formData.append('phone', phone);

    // const postUser = async () => {
    //   try {
    //     const { token } = store.get('token');
    //     const request = await API__POST__USER(formData, token);
    //     console.log('request', request);
    //   } catch (e) {
    //     const status = e.response.request.status;
    //     setStatusError(status);
    //   } finally {
    //   }
    // };
    // postUser();

    const { token } = store.get('token');

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: formData,
      headers: { Token: token },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (!data.success)
          Report.failure('Cant be added, because:', data.message, 'Close');

        Report.success('Success ', 'User has been addad to database', 'Okay');
        console.log(data);
      })
      .catch(e => console.log(e));

    setFormData({
      name: '',
      phone: '',
      email: '',
      position: null,
      file: null,
      formIsValid: false,
      nameIsValid: 'init',
      emailIsValid: 'init',
      phoneIsValid: 'init',
      positionIsValid: false,
      fileIsValid: false,
    });
  };

  const onClick = () => {
    setError(255);
  };

  return (
    <UserForm onSubmit={onSubmit} autoComplete="off">
      <InputsField>
        <Label htmlFor="name">
          <Input
            type="text"
            name="name"
            id="name"
            value={userName}
            placeholder="Your name"
            onChange={onChange}
            isvld={nameIsValid}
          />
          {nameIsValid === 'false' && <ErrorText>Set name field</ErrorText>}
        </Label>
        <Label htmlFor="email">
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={onChange}
            isvld={emailIsValid}
          />
          {!emailIsValid === 'false' && <ErrorText>Set name field</ErrorText>}
        </Label>
        <Label>
          <PhoneInputComponent
            placeholder="Phone"
            value={phone}
            onChange={onChangePhone}
            name="phone"
            id="phone"
            defaultCountry="UA"
            international
            countryCallingCodeEditable={false}
            isvld={phoneIsValid}
          />
          {phoneIsValid === 'false' && <ErrorText>Set phone field</ErrorText>}
        </Label>
      </InputsField>
      <div>
        <TextForm>Select your position</TextForm>
        <RadioList>
          <RadioItemWrap>
            <RadioInput
              type="radio"
              id="front"
              name="position"
              value={1}
              onChange={onChange}
            />
            <RadioLabel htmlFor="front">Frontend developer</RadioLabel>
          </RadioItemWrap>
          <RadioItemWrap>
            <RadioInput
              type="radio"
              id="back"
              name="position"
              value={2}
              onChange={onChange}
            />
            <RadioLabel htmlFor="back">Backend developer</RadioLabel>
          </RadioItemWrap>
          <RadioItemWrap>
            <RadioInput
              type="radio"
              id="designer"
              name="position"
              value={3}
              onChange={onChange}
            />
            <RadioLabel htmlFor="designer">Designer</RadioLabel>
          </RadioItemWrap>
          <RadioItemWrap>
            <RadioInput
              type="radio"
              id="qa"
              name="position"
              value={4}
              onChange={onChange}
            />
            <RadioLabel htmlFor="qa">QA</RadioLabel>
          </RadioItemWrap>
        </RadioList>
      </div>
      <UploadWrapper>
        <UploadLabel htmlFor="file">
          <UploadInput
            type="file"
            id="file"
            name="file"
            onChange={onFileChange}
            file={file?.name}
            isvld={fileIsValid}
          />
        </UploadLabel>
        {fileIsValid === 'false' && (
          <ErrorText>{'Image must bee < 5mb and .jpeg format'}</ErrorText>
        )}

        {file?.name && <UploadFile>{file.name}</UploadFile>}
      </UploadWrapper>
      <FormBtn type="submit" disabled={formIsValid}>
        Sign up
      </FormBtn>

      <button type="button" onClick={onClick}>
        TEST
      </button>
    </UserForm>
  );
};
