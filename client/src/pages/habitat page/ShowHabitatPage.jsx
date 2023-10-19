import React, { useEffect, useState } from 'react'
import { getHabitat } from '../../axios/habitat';
import Table from '../../components/Table';
import TableData from './components/TableData';
import ModalDetail from './components/ModalDetail';
import MainContainer from '../../components/MainContainer';

const ShowHabitatPage = () => {
    const tableHead = ["Name", "Description", "action"];
    const [habitat, setHabitat] = useState([]);
    const [showModalDetail, setShowModalDetail] = useState(false);
    const [id, setId] = useState(null)
    const [modalCheck, setModalCheck] = useState(false)

    useEffect(() => {
        getHabitat((result) => setHabitat(result));
    }, [])

    const detailHandle = (id) => {
        setShowModalDetail(true);
        setId(id);
        setModalCheck(!modalCheck);
    }

    const tBody = <TableData
        habitat={habitat}
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
                {/* Table */}
                <Table
                    tHead={tableHead}
                    tBody={tBody}
                />
            </MainContainer>
        </>
    )
}

export default ShowHabitatPage