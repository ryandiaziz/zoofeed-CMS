/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import { fetchUser } from './redux/authSlice';
import { setsidebar } from './redux/menuSlice';
import Loading from './components/Loading';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sidebarRef = useRef()
  const menuRef = useRef()
  const { loading } = useSelector((state) => state.auth)
  const { isSidebarOpen } = useSelector((state) => state.menu)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      dispatch(fetchUser(token))
      navigate('/')
    } else {
      navigate('/login')
    }

  }, [])

  // useEffect(() => {
  //   const handler = (e) => {
  //     if (menuRef.current !== e.target) {
  //       dispatch(setsidebar())
  //       // console.log(sidebarRef.current)
  //     }
  //   }

  //   if (isSidebarOpen) {
  //     document.addEventListener("mousedown", handler)
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handler)
  //   }
  // })

  return (
    loading.fetch
      ? <Loading isFull={true} />
      : <>
        <NavBar menuRef={menuRef} />
        <SideBar sidebarRef={sidebarRef} />
        {/* <ProfileSideBar /> */}
        <MainContent />
      </>
  );
}

export default App;
