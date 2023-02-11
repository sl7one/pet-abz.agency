import { Text, UserItem, UserList, UserPhoto } from 'styled-components/styled';
import photo from './photo.png';

const fakeData = [
  {
    id: '1',
    photo,
    title: 'Salvador Stewart Flynn Thomas Salva...',
    descr:
      'Leading specialist of the department o... JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24',
  },
  {
    id: '2',
    photo,
    title: 'Takamaru Ayako Jurrien',
    descr: 'Lead Independent Director Takamuru@gmail.com +38 (098) 278 90 24',
  },
  {
    id: '3',
    photo,
    title: 'Salvador Stewart Flynn Thomas Salva...',
    descr:
      'Leading specialist of the department o... JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24',
  },
  {
    id: '4',
    photo,
    title: 'Salvador Stewart Flynn Thomas Salva...',
    descr:
      'Leading specialist of the department o... JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24',
  },
  {
    id: '5',
    photo,
    title: 'Salvador Stewart Flynn Thomas Salva...',
    descr:
      'Leading specialist of the department o... JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24',
  },
  {
    id: '6',
    photo,
    title: 'Salvador Stewart Flynn Thomas Salva...',
    descr:
      'Leading specialist of the department o... JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24',
  },
];

export const Users = () => {
  const list = fakeData.map(({ id, photo, title, descr }) => (
    <UserItem key={id}>
      <UserPhoto src={photo} alt={title} />
      <h3>{title}</h3>
      <Text title="false">{descr}</Text>
    </UserItem>
  ));
  return <UserList>{list}</UserList>;
};
