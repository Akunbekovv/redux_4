import React, {useState} from 'react';
import style from './css/style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DivisionAction, MinusAction, MultiplyAction, PlusAction} from "../redux/action";
import {Button, CircularProgress, TextField, Typography} from "@mui/material";
const Count = () => {
    const dispatch = useDispatch()
    const {counter} = useSelector(state => state)
    const [num, setNum] = useState('')
    const [num2, setNum2] = useState('')

    const plus = () => {
        dispatch(PlusAction(+num + +num2))
    }
    const minus = () => {
        dispatch(MinusAction(num - num2))
    }
    const multiply = () => {
        dispatch(MultiplyAction(num / num2))
    }
    const division = () => {
        dispatch(DivisionAction(num * num2))
    }
    const restart = () => {
        setNum('')
        setNum2('')
        dispatch(DivisionAction(''))
    }





    return (
        <div className={style.block}>
            <div className={style.input}>
                <TextField type="number"
                           value={num}
                           onChange={({target}) => setNum(target.value)}
                />
                <br/>
                <TextField type="number2"
                           value={num2}
                           onChange={({target}) => setNum2(target.value)}
                />
            </div>
            <br/>
            <div className={style.btns}>
            <Button variant='contained' onClick={plus}>+</Button>
            <Button color='success' variant='contained' onClick={minus}>-</Button>
            <Button color='secondary' variant='contained' onClick={multiply}>x</Button>
            <Button variant='contained' onClick={division}>/</Button>
            <Button variant='contained' onClick={restart}>Restart</Button>
            </div>

            {
                !num.length || !num2.length
                ?
                <div className={style.search}>
                    <CircularProgress/>
                </div>
                :
                <Typography variant='h2'>{counter}</Typography>
            }
        </div>
    );
};

export default Count;