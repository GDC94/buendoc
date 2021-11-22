import { useState } from 'react';
import {
    Layout,
    Button,
    Divider
} from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import '../css/HeaderTitle.css';
import odontologia from '../assets/dientes.png';
import psicologia from '../assets/divan.png';
import nutricion from '../assets/nutricion.png';
import traumatologia from '../assets/articulaciones.png';
import { ModalNuevoMedico } from './ModalNuevoMedico';




const { Header } = Layout;



export default function HeaderTitle() {
    const [visible, setVisible] = useState(false);
    const showModalNuevoMedico = () => {
        setVisible(true);
    };

    return (

        <Header className='title-container'>
            <div className='title'>
                <p>Tu turno de estar mejor</p>
                <h2>Los mejores médicos a un click de distancia</h2>
                <Divider className="especilidades">
                    <img className='icons' src={nutricion} alt="nutricion" />
                    <img className='icons' src={odontologia} alt="odontologia" />
                    <img className='icons' src={psicologia} alt="psicologia" />
                    <img className='icons' src={traumatologia} alt="traumatologia" />
                </Divider>

                <Button
                    className='button'
                    onClick={showModalNuevoMedico}
                    type='primary'
                >
                    <PlusCircleFilled className='plus' />Añadir profesional
                </Button>
                <ModalNuevoMedico setVisible={setVisible} visible={visible} />


            </div>
        </Header >
    )
}













