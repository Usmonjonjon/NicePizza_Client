import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { useInfoContext } from '../../context/authContext';
import { updateUserData } from '../../api/authRequest';

const Profile = () => {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const password_rf = useRef()

  console.log();

  const handleEditClick = () => {
    navigate('/edit-profile');
  };
  const [burger, setBurger] = useState(false)
    const toggle = () => setBurger(!burger)

  const {currentUser} = useInfoContext();

   const handlePasswordChange = async () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    try {
      let newPass = {password: password_rf.current.value}
      await updateUserData(currentUser._id, newPass);
      alert('Пароль успешно изменен');
    } catch (error) {
      alert('Ошибка при изменении пароля');
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Мой аккаунт</h2>
        <div className="profile-nav">
          <button>История заказов</button>
          <button>Настройки</button>
        </div>
      </div>
        <h3>Личные данные</h3>
      <div className="profile-section">
        <div>
          <label>Имя*</label>
          <span>{currentUser.name}</span>
        </div>
        <div>
          <label>Номер телефона*</label>
          <span>{currentUser.phone}</span>
        </div>
        <div>
          <label>Почта</label>
          <span>{currentUser.email}</span>
        </div>
        <div>
          <label>Дата рождения</label>
          <span>{currentUser.birthdate}</span>
        </div>
        <button className="edit-button" onClick={handleEditClick}>Изменить</button>
      </div>
      <div className="profile-section">
        <h3>Пароль</h3>
        <button className="x-btn" onClick={toggle}>
          {burger ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      </div>
          {burger && 
            <div className='edit'>
              <div>
                <label>Новый пароль</label>
                <input
                  type="password"
                  name="password"
                  ref={password_rf}
                />
              </div>
              <div>
                <label>Подтвердить пароль</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <button className='edit-btn' onClick={handlePasswordChange}>Изменить</button>
            </div>
          }
      <div className="profile-section1">
        <h3>Подписки</h3>
        <div>
          <br />  
          <label>
            <input type="checkbox" name="subscribe" />
            Получать предложения и акции
          </label>
        </div>
      </div>
    </div>
  );
};

export default Profile;
