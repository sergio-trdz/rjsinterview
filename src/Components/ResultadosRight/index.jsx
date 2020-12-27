import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Context } from '../../utils/Context.jsx';
import { useHistory } from 'react-router-dom';
import Modal4 from '../../Components/Modal4/index.jsx';

const useStyles = makeStyles ((theme) => ({
    container: {
        display:"flex",
        flexDirection: "column",
    }
}))

const ResultadosRight = () => {

    const classes = useStyles()

    const { questions, option  } = useContext(Context)
    const [ notes, setNotes ] = useState()

    useEffect(() => {
        let aux;
        let note = 0;

        aux = option?.map(element => {

            note = questions?.reduce((accum, currentValue) => currentValue?.correct === true ? accum += 2 : accum, 0)

            return {topic: element.topic, note }
        })

        setNotes(aux)
    } ,[])

    return (
        <div className={classes.container}>
            <h3>
                Resultados
            </h3>
            <div>
                {
                    notes?.map(item => <p>{`${item?.topic} ${item?.note}`}</p>)
                }
            </div>
            <Modal4 />
        </div>
    )
}

export default ResultadosRight;