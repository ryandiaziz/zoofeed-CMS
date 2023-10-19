/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { FaStickerMule, FaApple, FaUser } from 'react-icons/fa'

import { readDataAnimal } from '../axios/animal';
import { readData } from '../axios/food';
import { getAllUser } from '../axios/user';
import DashboardCard from '../components/DashboardCard';
import MainContainer from '../components/MainContainer';

const HomePage = () => {
    const [animals, setAnimals] = useState([])
    const [foods, setFoods] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        readDataAnimal((result) => setAnimals(result))
        readData((result) => setFoods(result))
        getAllUser((result) => setUsers(result))
    }, []);

    const items = [
        {
            icon: <FaStickerMule size={50} color={'white'} />,
            count: animals.length,
            label: 'Animals',
            color: 'bg-blue-400'
        },
        {
            icon: <FaApple size={50} color={'white'} />,
            count: foods.length,
            label: 'Foods',
            color: 'bg-red-400'
        },
        {
            icon: <FaUser size={50} color={'white'} />,
            count: users.length,
            label: 'Users',
            color: 'bg-green-400'
        },
    ]

    return (
        <MainContainer>
            <div className='flex flex-wrap gap-3'>
                {
                    items.map((item) => {
                        return (
                            <DashboardCard
                                icon={item.icon}
                                count={item.count}
                                label={item.label}
                                color={item.color}
                            />
                        )
                    })
                }
            </div>
        </MainContainer>
    )
}

export default HomePage