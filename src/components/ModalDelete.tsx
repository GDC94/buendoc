import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Divider, Modal, Typography } from 'antd';
import '../css/ModalDelete.css';
import { buenDocApi } from '../api/buenDocApi';
import { Professional } from '../interfaces/reqRes';
import corazon from '../assets/corazon.png';


const { Title } = Typography;
interface ModalProps {
    isModalDeleteVisible: boolean,
    setIsModalDeleteVisible: Function,
    medico: Professional,
}

export default function ModalDelete({ isModalDeleteVisible, setIsModalDeleteVisible, medico }: ModalProps) {

    const { confirm } = Modal;
    const { id, first_name, last_name } = medico;

    const handleOk = () => {
        setIsModalDeleteVisible(false);
    };
    const handleCancel = () => {
        setIsModalDeleteVisible(false);
    };

    const modalError = (text: any) => {
        Modal.error({
            content: text,
        });
    }
    const modalSuccess = (text: string) => {
        setTimeout(() => {
            Modal.success({
                content: text,
            });
            setIsModalDeleteVisible(false);

        }, 200);

    }

    const reload = () => {
        window.location.replace('');
    }
    const confirmarEliminacion = () => {
        confirm({
            title: '¿Estás seguro de que deseas eliminar este profesional?',
            icon: <ExclamationCircleOutlined />,
            content: (<Button style={{ background: 'var(--salmon)', color: '#fff', fontWeight: 'bold', border: 'none' }} onClick={() => eliminarMedico(id)}>Eliminar</Button>),

        });
    }


    const eliminarMedico = async (medicoId: number) => {
        await buenDocApi.delete(`professionals/${medicoId}/`)
            .then(respuesta => {
                console.log(respuesta.data)
                modalSuccess('Profesional eliminado con éxito!');
                setIsModalDeleteVisible(false);
                reload();

            })
            .catch(error => {
                console.log(error)
                modalError('No hemos podido eliminar el registro')
            });

    }
    return (
        <Modal
            title="Eliminar profesional"
            visible={isModalDeleteVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Regresar
                </Button>,
                <Button key="submit" type="primary" onClick={confirmarEliminacion}>
                    Eliminar
                </Button>,

            ]}
        >
            <Divider>
                <div className="delete-container">
                    <img src={corazon} alt='' />
                    <Title level={4} style={{ textTransform: 'uppercase' }}>{first_name} {last_name}</Title>
                </div>
            </Divider>
        </Modal>

    )
}

