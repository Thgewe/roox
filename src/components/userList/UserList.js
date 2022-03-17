import { useEffect, useState } from 'react';

import Spinner from '../Spinner/Spinner';
import UserCard from '../userCard/UserCard';

import './userList.scss';

const UserList = (props) => {

  const { users, filter, loading, setUserId } = props;

  const [ newList, setNewList ] = useState([]);


  const newUsers = (arr) => {
    return arr.map((user) => {
      return (
        <UserCard
          key={user.id}
          fio={user.name}
          city={user.address.city}
          company={user.company.name}
          setUserId={setUserId} 
          userId={user.id} />
      )
    });
  }


  useEffect(() => {
    const listOfUsers = newUsers(users);
    setNewList(listOfUsers)
  }, [users])

  useEffect(() => {

    const newArr = JSON.parse(JSON.stringify(users));

    if (filter === 'city') {
      newArr.sort((a, b) => {
        if (a.address.city < b.address.city) return -1; 
        if (a.address.city > b.address.city) return 1; 
        return 1;
      })
      setNewList(newUsers(newArr));
    } else if (filter === 'company') {

      newArr.sort((a, b) => {
        if (a.company.name < b.company.name) return -1; 
        if (a.company.name > b.company.name) return 1; 
        return 1;
      })
      setNewList(newUsers(newArr));

    } else {
      setNewList(newUsers(users));
    }
  }, [filter])


  let content = loading ? <Spinner /> : newList;

  return (
    <div className='userlist'>
      <h1>Список пользователей</h1>
      {content}
    </div>
  )
}

export default UserList;