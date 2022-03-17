import Button from '../button/Button';
import Input from '../Input/Input';

import { useEffect, useState, useRef } from 'react';
import { UserService } from '../service/UserService';
import Spinner from '../Spinner/Spinner';

import './userProfile.scss';

const UserProfile = (props) => {

  const [ user, setUser ] = useState(null);
  const [ readOnly, setReadOnly ] = useState(true);
  const [ isFormValid, setIsFormValid ] = useState(true);

  const { userId } = props;

  const { getUserById } = UserService();

  useEffect(() => {
    updateUser();
  }, [])

  const onUserLoaded = (user) => {
    setUser(user);
  }

  const updateUser = () => {
    getUserById(userId)
      .then(onUserLoaded)
  }

  const edit = () => {
    setReadOnly(() => !readOnly);
  }

  const formValidation = (valid) => {
    setIsFormValid(valid);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(document.querySelector("#forma"))

    if (isFormValid) {
      const json = {};
      formData.forEach((user, i) => {
        json[i] = user;
      });
      console.log(JSON.stringify(json));
    }
  }

  let disabled = readOnly ? 'disabled' : null;

  let content = user === null ?
  <Spinner /> :
  <View
    user={user}
    readOnly={readOnly}
    formValidation={formValidation}/>;

  return (
    <div className='profile'>
      <div className='profile__header'>
        <h1>Профиль пользователя</h1>
        <Button text="Редактировать" onClick={edit}/>
      </div>
      <div className='profile__form'>
        {content}
      </div>
      <div className='profile__submit'>
        <button
          type='submit'
          form='forma'
          disabled={disabled}
          onClick={onSubmit} >
            Отправить
        </button>
      </div>
    </div>
  )
}

const View = (props) => {
  const { user, readOnly, formValidation } = props;
  return (
    <>
      <form id="forma" >
        <Input
          name="Name"
          value={user.name}
          placeholder="Your name"
          readOnly={readOnly}
          valid={/^[a-z,A-Z]/}
          setIsFormValid={formValidation}/>
        <Input
          name="User name"
          value={user.username}
          placeholder="Your user name"
          readOnly={readOnly}
          setIsFormValid={formValidation}/>
        <Input
          name="E-mail"
          value={user.email}
          placeholder="Your email"
          readOnly={readOnly}
          valid={/^[a-z,A-Z,0-9]+@[a-z,A-Z,0-9]+\.[a-z]+/}
          setIsFormValid={formValidation}/>
        <Input
          name="Street"
          value={user.address.street}
          placeholder="Your street"
          readOnly={readOnly}
          setIsFormValid={formValidation}/>
        <Input
          name="City"
          value={user.address.city}
          placeholder="Your city"
          readOnly={readOnly}
          setIsFormValid={formValidation}/>
        <Input
          name="Zip code"
          value={user.address.zipcode}
          placeholder="Your zipcode"
          readOnly={readOnly}
          setIsFormValid={formValidation}/>
        <Input
          name="Phone"
          value={user.phone}
          placeholder="Your phonenumber"
          readOnly={readOnly}
          setIsFormValid={formValidation}/>
        <Input
          name="Website"
          value={user.website}
          placeholder="Your website"
          readOnly={readOnly}
          setIsFormValid={formValidation}/>
        <div className='profile__textarea'>
          <div>Comment</div>
          <textarea readOnly={readOnly} name="textarea"/>
        </div>
      </form>
    </>
  )
}

export default UserProfile;