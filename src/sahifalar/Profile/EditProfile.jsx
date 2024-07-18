import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { useInfoContext } from '../../context/authContext';
import { updateUserData } from '../../api/authRequest';

const EditProfile = () => {
    const {currentUser, setCurrentUser} = useInfoContext();
    console.log(currentUser);



    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        window.alert("Please wait...")
        const fromData = new FormData(e.target);

        const {data} = await updateUserData(currentUser._id, fromData)

        window.alert("Success...")

        setCurrentUser(data)
      } catch (error) {
        console.log(error);
      }
    }
 


  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Изменение личных данных</h2>
      </div>
      <form className="profile-form active" onSubmit={handleSubmit}>
        <div className="profile-section">
          <div>
            <label>Имя</label>
            <input type="text" placeholder={currentUser.name} name="name"/>
          </div>
          <div>
            <label>Номер телефона</label>
            <input type="text" placeholder={currentUser.phone} name="phone" />
          </div>
          <div>
            <label>Почта</label>
            <input type="email" placeholder={currentUser.email} name="email" />
          </div>
          <div>
            <label>Дата рождения</label>
            <input type="date" name="birthdate" />
          </div>
          <button type="submit">Сохранить изменения</button>
        </div>
      </form>
    </div>
  );

}
  
export default EditProfile;
