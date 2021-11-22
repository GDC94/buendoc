import React, { useState } from 'react';
import { Card, Avatar, Typography } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Professional } from '../interfaces/reqRes';
import logo from '../assets/img.jpg';
import doctor from '../assets/doctor.png';
import '../css/Card.css';
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';
import ModalDetail from './ModalDetail';
const { Title } = Typography;
const { Meta } = Card;


interface CardProps {
    medico: Professional
}

export default function CardProfile({ medico }: CardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
    const [isModalDetailVisible, setIsModalDetailVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const showModalDelete = () => {
        setIsModalDeleteVisible(true);
    };
    const showModalDetail = () => {
        setIsModalDetailVisible(true);
    };




    const {
        first_name,
        last_name,
        is_active } = medico;

    return (
        <div className='card-container'>
            <Card
                className='card'
                cover={
                    <div className='card-image-container' >
                        <img
                            className='card-image-cover'
                            alt="example"
                            src={logo}
                        />
                    </div>
                }
                actions={[
                    <EyeOutlined key="setting" onClick={showModalDetail} />,
                    <ModalDetail
                        isModalDetailVisible={isModalDetailVisible}
                        setIsModalDetailVisible={setIsModalDetailVisible}
                        medico={medico} />,
                    <EditOutlined key="edit" onClick={showModal} />,
                    <ModalEdit
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                        medico={medico} />,
                    <DeleteOutlined key="ellipsis" onClick={showModalDelete} />,
                    <ModalDelete
                        isModalDeleteVisible={isModalDeleteVisible}
                        setIsModalDeleteVisible={setIsModalDeleteVisible}
                        medico={medico} />
                ]}
            >
                <Meta
                    avatar={<Avatar src={doctor} />}
                    title={<Title level={5} style={{ textTransform: 'uppercase', color: 'var(--strongblue)' }}>{`${first_name} ${last_name}`}</Title>}
                    description={is_active ? (<div className='div'><i className='disponible'></i>disponible</div>) : (<div className='div'><i className='no-disponible'></i>no disponible</div>)}
                />
            </Card>
        </div>
    );
}
