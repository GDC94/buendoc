import { Button, Divider, Input, Modal, Form, Select } from 'antd';
import { useState } from 'react';



interface ModalEditProps {
    isModalVisible: boolean,
    medico: Object,
    setIsModalVisible: Function,

}

export default function ModalEdit({ isModalVisible, setIsModalVisible, medico}: ModalEditProps) {

   

    const [medicoeditado, setMedicoEditado] = useState({
        profile_image: "",
        first_name: "",
        last_name: "",
        email: "",
    });
    const { first_name, last_name, email } = medicoeditado;
    
    const [form] = Form.useForm();
    const handleOk = () => { setIsModalVisible(false); };
    const handleCancel = () => { setIsModalVisible(false); };
    const cerrarBorrar = () => {
        setIsModalVisible(false);
        form.resetFields();
    }
    const borrar = () => {
        form.resetFields();
    }

    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        }
    }


    const validateMessages = {
        // eslint-disable-next-line no-template-curly-in-string
        required: "${label} es requerido",
        types: {
            // eslint-disable-next-line no-template-curly-in-string
            email: "${label} No es un mail valido!",
        },
    };

    const handleChangeEdit = (e:any) => {

    }
    const handleChangeEditIdiomas = () => {

    }
    const handleChangeImages = () => {

    }


    const onFinish = (e: any) => {
        /*setNuevoMedico(e);
        const nuevoMedicoData = new FormData();
        nuevoMedicoData.append("profile_image", nuevomedico.profile_image);
        nuevoMedicoData.append("first_name", nuevomedico.first_name);
        nuevoMedicoData.append("last_name", nuevomedico.last_name);
        nuevoMedicoData.append("email", nuevomedico.email);
        buenDocApi.post("/professionals/", nuevoMedicoData)
            .then((response) => {
                console.log(response);
                setIdNuevoMedico(response.data.id)
                modalSuccess('Profesional creado con éxito!')
            })
            .catch((e) => {
                console.log(e.response.data)
                modalError('Ha ocurrido un error')
            });
        */
    }






    return (
        <>
            <Modal
                title="Editar profesional"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
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
                    {/*------------NOMBRE----------*/}
                    <Form.Item
                        name={['first_name']}
                        label="Nombre"
                        rules={[{
                            required: true,
                        }]}>
                        <Input
                            type='text'
                            onChange={handleChangeEdit}
                            name='first_name'
                            value={medicoeditado && first_name}
                        />
                    </Form.Item>


                    {/*------------APELLIDO----------*/}
                    <Form.Item
                        name={['last_name']}
                        label="Apellido"
                        rules={[{
                            required: true,
                        }]}>
                        <Input
                            type='text'
                            onChange={handleChangeEdit}
                            name='last_name'
                            value={medicoeditado && last_name}
                        />
                    </Form.Item>


                    {/*------------EMAIL----------*/}
                    <Form.Item
                        name={['email']}
                        label="Email"
                        rules={[{
                            required: true,
                            type: 'email',
                        }]}>
                        <Input
                            type='text'
                            onChange={handleChangeEdit}
                            name='email'
                            value={medicoeditado && email}
                        />
                    </Form.Item>


                    {/*------------IMAGEN----------*/}
                    <Form.Item
                        name={['profile_image']}
                        label="Imagen"
                        required={true}
                    >
                       {/* <Input type='file' onChange={(event) => handleChangeImages(event.target.files)} /> */}
                    </Form.Item>





                    {/*------------LENGUAJES----------*/}
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
                            
                            mode="multiple"
                            onChange={handleChangeEditIdiomas}
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
                            Editar
                        </Button>
                    </Divider>
                </Form>

            </Modal>
        </>
    )
}









