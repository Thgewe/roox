import React from "react";

import { Link } from 'react-router-dom';

import './userCard.scss';

const UserCard = (props) => {
  const { fio, city, company, setUserId, userId } = props;

  const onClick = (id) => {
    setUserId(id);
  }

  return (
    <div className="user">
      <div className="user__left">
        <div className="user__fio"><span>ФИО: </span>{fio}</div>
        <div className="user__city"><span>город: </span>{city}</div>
        <div className="user__company"><span>компания: </span>{company}</div>
      </div>
      <div className="user__right" onClick={() => {onClick(userId)}}>
        <Link to="/userprofile">Подробнее</Link>
      </div>
    </div>
  )
}

export default UserCard;