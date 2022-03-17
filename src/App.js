
import { useEffect, useState } from 'react';

import UserProfile from './components/userProfile/UserProfile';
import UserList from './components/userList/UserList'
import { UserService } from './components/service/UserService'
import Sorting from './components/sorting/Sorting';
import { Routes, Route, Link } from 'react-router-dom';

import './App.scss';

function App() {
  const [ users, setUsers ] = useState([]);
  const [ filter, setFilter ] = useState('');
  const [ userId, setUserId ] = useState(1);

  const { getUsers, loading } = UserService();
  useEffect(() => {
    updateUsers();
  }, [])

  const changeFilter = (filterBy) => {
    setFilter(() => {
      return filter === filterBy ? '' : filterBy;
    });
  }

  const onUsersLoaded = (users) => {
    setUsers(users)
  }

  const updateUsers = () => {
    getUsers()
      .then(onUsersLoaded)
  }

  return (
    <div className="app">
      <Sorting onClick={changeFilter}/>
      <Routes >
        <Route path="/" element={
          <UserList
            users={users}
            filter={filter}
            loading={loading}
            setUserId={setUserId} />
        } />
        <Route path="/userprofile"element={<UserProfile userId={userId}/>} />
        <Route path="*" element={<div>404</div>}/>
      </Routes>
    </div>
  );
}

export default App;
