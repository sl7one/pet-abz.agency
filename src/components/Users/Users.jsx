import defaultPhoto from './img/def.png';
import { ColorRing } from 'react-loader-spinner';
import {
  InfoWrap,
  ShowMoreBtn,
  UserItem,
  UserList,
  UserPhoto,
} from 'styled-components/styled';
import { UserMetaData } from 'components/UserMetaData/UserMetaData';
import { API__DATA, API__LOAD__MORE } from 'API/API';
import { useEffect, useState } from 'react';

export const Users = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getUserList = async () => {
      setIsLoading(true);
      try {
        const usersData = await API__DATA();
        setUserList(usersData.users);
        setTotalPages(usersData.total_pages);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUserList();
    console.log('GET_USERS');
  }, []);

  useEffect(() => {
    if (page === 1) return;
    const getUserList = async () => {
      setIsLoading(true);
      try {
        const usersData = await API__LOAD__MORE(page);
        setUserList(prev => [...prev, ...usersData.users]);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUserList();

    console.log('LOAD MORE PAGE');
  }, [page]);

  const getMoreUsers = () => {
    setPage(prev => prev + 1);
  };

  const list = userList.map(({ id, photo, name, position, email, phone }) => (
    <UserItem key={id}>
      <UserPhoto
        src={photo.includes('/images/users/') ? photo : defaultPhoto}
        alt={name}
      />
      <UserMetaData id={id} text={name}>
        {name}
      </UserMetaData>
      <InfoWrap>
        <UserMetaData id={id + 'pos'} text={position}>
          {position}
        </UserMetaData>
        <UserMetaData id={id + 'e'} text={email}>
          {email}
        </UserMetaData>
        <UserMetaData id={id + 'phone'} text={phone}>
          {`${phone.slice(0, 3)}${' '}(${phone.slice(3, 6)})${' '}${phone.slice(
            6,
            9
          )}${' '}${phone.slice(9, 11)}${' '}${phone.slice(11, 13)}`}
        </UserMetaData>
      </InfoWrap>
    </UserItem>
  ));

  if (isLoading) return;

  console.log('USER RENDER');
  return (
    <>
      <UserList>
        {isLoading ? (
          <ColorRing
            visible={isLoading}
            height="48"
            width="48"
            ariaLabel="blocks-loading"
            colors={['#00BDD3', '#00BDD3', '#00BDD3', '#00BDD3', '#00BDD3']}
          />
        ) : (
          list
        )}
      </UserList>

      <ShowMoreBtn onClick={getMoreUsers} disabled={page === totalPages}>
        Show More
      </ShowMoreBtn>
    </>
  );
};
