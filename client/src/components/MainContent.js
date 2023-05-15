import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {
    HomePage,
    AnimalPage,
    ShowAnimalPage,
    FoodPage,
    ShowFoodPage,
    LoginPage,
    SignUpPage,
    ClassTypePage,
    ShowClassTypePage,
    PaymentPage,
    ShowPaymentPage,
    TicketPage,
    ShowTicketPage,
    UserTicketPage,
    ShowUserTicketPage
} from '../pages';

const MainContent = ({
    loginStatus,
    loginCbHandler,
    userData,
    userCheck,
    setUserCheck, }) => {
    return (
        <>
            <Routes>
                <Route path='' element={<HomePage loginStatus={loginStatus} />} />
                <Route path='login' element={<LoginPage loginStatus={loginStatus} loginCbHandler={loginCbHandler} />} />
                <Route path='register' element={<SignUpPage loginCbHandler={loginCbHandler} />} />
                <Route path='animals' element={<AnimalPage />}>
                    <Route path='' element={<ShowAnimalPage loginStatus={loginStatus} />}></Route>
                </Route>
                <Route path='foods' element={<FoodPage />}>
                    <Route path='' element={<ShowFoodPage loginStatus={loginStatus} />} />
                </Route>
                <Route path='classType' element={<ClassTypePage />}>
                    <Route path='' element={<ShowClassTypePage />}></Route>
                </Route>
                <Route path='transaction' element={<PaymentPage />}>
                    <Route path='' element={<ShowPaymentPage />}></Route>
                </Route>
                <Route path='ticket' element={<TicketPage />}>
                    <Route path='' element={<ShowTicketPage />}></Route>
                </Route>
                <Route path='userTicket' element={<UserTicketPage />}>
                    <Route path='' element={<ShowUserTicketPage />}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default MainContent