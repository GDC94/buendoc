/* eslint-disable no-lone-blocks */
import { useEffect, useState } from 'react';
import { useLenguajes } from '../hooks/useLenguajes';
import { buenDocApi } from '../api/buenDocApi';
import {
    Button,
    Modal,
    Form,
    Input,
    Select,
    Divider
} from 'antd';


interface lenguajesDisponibles {
    value: number
    label: string
}
/*
Los campos que necesita el endpoint de /professional-languages/ para crearse son solo language_id y professional_id, uno es el id del lenguaje filtrado en el endpoint 
/languages/ y el otro es el id del profesional al que se le agrega el lenguaje 
*/
interface lenguajesNuevoMedico {
    language_id: number
    professional_id: number

}
interface Props {
    setVisible: Function
    visible: boolean
}
const options: lenguajesDisponibles[] = [];




export const ModalNuevoMedico = ({ setVisible, visible }: Props) => {


    const [nuevomedico, setNuevoMedico] = useState({
        profile_image: "",
        first_name: "",
        last_name: "",
        email: "",
    });
    const { first_name, last_name, email } = nuevomedico;
    const [statelenguajesnuevomedico, setLenguajesNuevoMedico] = useState<lenguajesDisponibles[]>([]);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);



    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        }
    }

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            setVisible(false);
        }, 3000);
    };
    const cerrarBorrar = () => {
        setVisible(false);
        form.resetFields();
    }
    const borrar = () => {
        form.resetFields();
    }
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
            setVisible(false);

        }, 200);

    }

    const { lenguajes } = useLenguajes();
    useEffect(() => {
        lenguajes.forEach((lang) => {
            options.push({
                value: lang.id,
                label: lang.name
            })
        });

    }, [lenguajes]);


    const validateMessages = {
        // eslint-disable-next-line no-template-curly-in-string
        required: "${label} es requerido",
        types: {
            // eslint-disable-next-line no-template-curly-in-string
            email: "${label} No es un mail valido!",
        },
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setNuevoMedico({
            ...nuevomedico,
            [name]: value
        });
        console.log(nuevomedico)
    }
    const handleChangeIdiomas = (e: any) => {
        setLenguajesNuevoMedico(e);
        console.log(statelenguajesnuevomedico);
    }

    const handleChangeImages = (files: any) => {
        setNuevoMedico({
            ...nuevomedico,
            profile_image: files[0]
        });
    }
    const reload = () => {
        window.location.replace('');
    }


    /*const addLenguajesNuevoMedico = async ( data:lenguajesNuevoMedico) => {
        const respuesta = await buenDocApi.post("/professional-languages/", data);
        statelenguajesnuevomedico.forEach(lenguaje => {
            addLenguajesNuevoMedico({ 
                professional_id: response.data.id,
                language_id: lenguaje.value,
            })
        })
    }

    */

    const onFinish = (e: any) => {
        setNuevoMedico(e);
        const nuevoMedicoData = new FormData();
        nuevoMedicoData.append("profile_image", nuevomedico.profile_image);
        nuevoMedicoData.append("first_name", nuevomedico.first_name);
        nuevoMedicoData.append("last_name", nuevomedico.last_name);
        nuevoMedicoData.append("email", nuevomedico.email);
        buenDocApi.post("/professionals/", nuevoMedicoData)
            .then((response) => {
                { /*verificar si me retorna el id del medico creado*/ }
                console.log(response.data.id)
                modalSuccess('Profesional creado con éxito!');
                reload();

            })
            .catch((e) => {
                const error = JSON.stringify(e.response.data);
                modalError(`${error}`)
            });


    }





    return (



        <Modal
            visible={visible}
            title="Añadir un nuevo profesional"
            onOk={handleOk}
            onCancel={() => setVisible(false)}
            centered
            destroyOnClose={true}
            footer={[
                <Button key="back" onClick={cerrarBorrar}>
                    Cancelar
                </Button>
            ]}
        >
            <Form
                {...layout}
                form={form}
                validateMessages={validateMessages}
                onFinish={onFinish}
            >
                <Form.Item
                    name={['first_name']}
                    label="Nombre"
                    rules={[{
                        required: true,
                    }]}>
                    <Input
                        type='text'
                        onChange={handleChange}
                        name='first_name'
                        value={first_name}
                    />
                </Form.Item>

                <Form.Item
                    name={['last_name']}
                    label="Apellido"
                    rules={[{
                        required: true,
                    }]}>
                    <Input
                        type='text'
                        onChange={handleChange}
                        name='last_name'
                        value={last_name}
                    />
                </Form.Item>

                <Form.Item
                    name={['email']}
                    label="Email"
                    rules={[{
                        required: true,
                        type: 'email',
                    }]}>
                    <Input
                        type='text'
                        onChange={handleChange}
                        name='email'
                        value={email}
                    />
                </Form.Item>

                <Form.Item
                    name={['profile_image']}
                    label="Imagen"
                    required={true}
                >
                    <Input type='file' onChange={(event) => handleChangeImages(event.target.files)} />
                </Form.Item>

                <Form.Item
                    name={['idiomas']}
                    label="Idiomas"
                    rules={[{
                        required: false,
                        message: "Idiomas que habla el profesional",
                        type: "array",
                    }]}
                >
                    <Select
                        placeholder="Seleccione los idiomas"
                        options={options}
                        mode="multiple"
                        onChange={handleChangeIdiomas}
                        allowClear
                    >
                    </Select>
                </Form.Item>

                <Divider orientation="right">
                    <Button
                        key="back"
                        type='ghost'
                        onClick={borrar}
                    >
                        Borrar campos
                    </Button>

                    <Button
                        key="submit"
                        type='primary'
                        htmlType='submit'
                    >
                        Añadir profesional
                    </Button>
                </Divider>
            </Form>
        </Modal>

    )
}
