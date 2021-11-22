import { Modal, Tag, Divider, Typography } from 'antd';
import { Professional } from '../interfaces/reqRes';
import logo from '../assets/img.jpg';
import { useMedicoLenguajes } from '../hooks/useMedicoLenguajes';
import '../css/ModalDetail.css';
import { MailOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;


interface ModalDetailProps {
    isModalDetailVisible: boolean,
    setIsModalDetailVisible: Function,
    medico: Professional,
}

export default function ModalDetail({ medico, isModalDetailVisible, setIsModalDetailVisible }: ModalDetailProps) {
    const { first_name, last_name, id, is_active, profile_image, email } = medico;
    const handleOk = () => { setIsModalDetailVisible(false); };
    const handleCancel = () => { setIsModalDetailVisible(false); };
    const { lenguajesdelmedico } = useMedicoLenguajes(id);

    return (
        <Modal
            title="Detalles del profesional"
            visible={isModalDetailVisible}
            onOk={handleOk}
            onCancel={handleCancel}>

            <div className="modal-detail-main">
                <div className="modal-detail-img">
                    <img src={profile_image} alt="img_medico" />
                </div>
                <div className="modal-detail-name">
                    <img src={logo} alt="logo" />
                    <Title style={{ textTransform: 'uppercase' }} level={4}>{first_name} {last_name}</Title>
                    <Text code><MailOutlined /> {email}</Text>
                    <Text>{is_active ? <Text type="success">Disponible</Text> : <Text type="danger">No disponible</Text>}</Text>
                    <div className="lenguajes">
                        <Divider orientation="left">Habla los siguientes idiomas:</Divider>
                        {
                            lenguajesdelmedico &&
                            lenguajesdelmedico.map((i) => (
                                <Tag color="orange" key={i.language.id}>{i.language.name}</Tag>
                            ))
                        }
                    </div>
                </div>
            </div>

        </Modal>
    )
};
