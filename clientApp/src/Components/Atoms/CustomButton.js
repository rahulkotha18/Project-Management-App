import React from 'react'
import {Button} from '@material-ui/core'
const CustomButton=(props)=>{
    return(
        <div>
        <Button style={{backgroundColor: "#f2a100",
            borderColor:"#f2a100"}}
        >
            {props.name}</Button>
        </div>
    );
}
export default CustomButton;