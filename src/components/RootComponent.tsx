import React, { useState } from 'react'
import CardProfile from './CardProfile';
import Loading from './Loading';
import '../css/RootComponent.css';
import { useMedicos } from '../hooks/useMedicos';
import { Button } from 'antd';





export default function RootComponent() {
    const { isloading, medicos } = useMedicos();


    const next = async () => {

    }

    const previous = () => {


    }

    return (


        <>
            <div className='table-container'>
                {
                    medicos.map((medico) => {
                        return <CardProfile key={medico.id} medico={medico} />
                    })
                }
            </div>
            <div>
                {isloading && <Loading />}
            </div>
            <div className='pagination-container'>
                <Button type='primary' onClick={() => previous()}>Anterior</Button>
                <Button type='primary' onClick={() => next()}>Siguiente</Button>
            </div>
        </>

    )
}
