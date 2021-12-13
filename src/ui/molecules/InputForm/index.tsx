import { InputHTMLAttributes } from "react";
import {Input, Label, Flex,Box, Text } from '../../atoms';


interface Props extends InputHTMLAttributes<HTMLInputElement>{
    labelText: string;
    name: string;
    error?: string;

}


const InputForm = ({labelText, error, name,...rest}: Props)=>{

return <Flex flexDirection='column'>
        <Label htmlFor={name}>{labelText}</Label>
        <Box height='6px'/>
        <Input 
        name={name}
        paddingLeft='11px' 
        paddingRight='16px' 
        paddingBottom='16px' 
        paddingTop='11px'
        {...rest}/>
        <Text height='20px'color='warning' textAlign='start'>{error}</Text>
       </Flex>
};


export default InputForm;