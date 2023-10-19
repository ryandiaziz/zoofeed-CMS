/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import { fetchUser } from './redux/authSlice';
import MainContainer from './components/MainContainer';
import ProfileSideBar from './components/ProfileSideBar';
import Loading from './components/Loading';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, isLogin } = useSelector((state) => state.auth)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      dispatch(fetchUser(token))
      navigate('/')
    } else {
      navigate('/login')
    }

  }, [])

  return (
    loading.fetch
      ? <Loading />
      : <>
        <NavBar />
        {/* <ProfileSideBar /> */}
        <SideBar />
        <MainContent />
      </>
  );
}

export default App;
