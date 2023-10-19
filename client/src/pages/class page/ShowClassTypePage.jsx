import React, { useState, useEffect } from 'react'

import { getClassType } from '../../axios/classType'
import Table from '../../components/Table';
import TableData from './components/TableData';
import ModalDetail from './components/ModalDetail';
import MainContainer from '../../components/MainContainer'

const ShowClassTypePage = () => {
    const [id, setId] = useState(0)
    const tableHead = ["Name", "Description", "Action"];
    const [ClassType, setClassType] = useState([])
    const [showModalDetail, setShowModalDetail] = useState(false);
    const [modalCheck, setModalCheck] = useState(false);

    useEffect(() => {
        getClassType((result) => setClassType(result))
    }, [])

    const detailHandle = (id) => {
        setShowModalDetail(true);
        setId(id);
        setModalCheck(!modalCheck);
    }

    const tBody = <TableData
        data={ClassType}
        detailHandle={detailHandle}
    />
    return (
        <>
            <ModalDetail
                id={id}
                showModalDetail={showModalDetail}
                setShowModalDetail={setShowModalDetail}
                modalCheck={modalCheck}
            />
            <MainContainer>
                <Table
                    tHead={tableHead}
                    tBody={tBody}
                />
            </MainContainer>
        </>
    )
}

export default ShowClassTypePage