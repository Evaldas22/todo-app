import React from 'react';
import Button from '../Button/Button';
import './ControlPanel.css';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const ControlPanel = (props) => {

    const {
        state,
        handleChange,
        handleAddClick,
        handleRemoveClick,
        handleSelectClick } = props;

    const handleKeyPress = (e) =>{
        if (e.key === 'Enter'){
            handleAddClick();
        }
    }

    return (
        <div className='controlPanel' >
            <InputGroup className='inputGroup'>
                <InputGroupAddon addonType="prepend">TODO:</InputGroupAddon>
                <Input 
                    value={state.inputValue} 
                    onChange={(e) => handleChange(e)} 
                    onKeyPress={handleKeyPress}
                />
            </InputGroup>
            <div className='buttonGroup'>
                <Button 
                    clickHandler={handleAddClick} 
                    label='Add' 
                    color='success'
                    className='add-btn'
                />
                <Button 
                    clickHandler={handleSelectClick } 
                    label={state.allSelected ? 'Unselect all' : 'Select All'} 
                    color='warning'   
                    className='select-btn' 
                />
                <Button 
                    clickHandler={handleRemoveClick} 
                    label='Remove selected' 
                    color='danger'
                    className='remove-btn' 
                />
            </div>
        </div>
    )
}

export default ControlPanel;