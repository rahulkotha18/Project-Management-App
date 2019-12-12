import React from 'react'
import { Button } from 'reactstrap';
const CustomButton=(props)=>{
    return(
        <div>
        <Button color={props.type}>{props.name}</Button>
        </div>
    );
}
export default CustomButton;