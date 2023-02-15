import { useState } from 'react';
import { Form } from './Form/Form';
import { Haeder } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Section } from './Section/Section';
import { Users } from './Users/Users';

export const App = () => {
  const [isUploadFile, setIsUploadFile] = useState('');
  return (
    <>
      <Haeder />
      <main>
        <Hero />
        <Section title="Working with GET request">
          <Users isUploadFile={isUploadFile} />
        </Section>
        <Section title="Working with POST request">
          <Form setIsUploadFile={setIsUploadFile} />
        </Section>
      </main>
    </>
  );
};
