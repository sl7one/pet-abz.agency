import { Form } from './Form/Form';
import { Haeder } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Section } from './Section/Section';
import { Users } from './Users/Users';

export const App = () => {
  console.log('APP RENDER');
  return (
    <>
      <Haeder />
      <main>
        <Hero />
        <Section title="Working with GET request">
          <Users />
        </Section>
        <Section title="Working with POST request">
          <Form />
        </Section>
      </main>
    </>
  );
};
