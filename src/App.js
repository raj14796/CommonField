import React, { useState } from 'react';
import CommonField from './CommonField';

const details = [
    {id: 1, name: 'ravi'},
    {id: 2, name: 'raj'},
    {id: 3, name: 'sunil'},
    {id: 4, name: 'singh'},
    {id: 5, name: 'manish'},
    {id: 6, name: 'trivedi'}
]

const App = () => {
    const [textValue, setTextValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(details);
    const [dropdownValue, setDropdownValue] = useState({});

    console.log('textValue >> ', textValue)
    console.log('checkboxValue >> ', checkboxValue)
    console.log('dropdownValue >> ', dropdownValue)

    const handleChangeHandler = (setFieldState) => (data) => {
        setFieldState(data.value);
    }
    return (
        <div>
            <CommonField
                data={{
                    fieldType: 'TEXT',
                    label: 'Textbox',
                    value: textValue
                }}
                changeHandler={handleChangeHandler(setTextValue)}
            />
            <CommonField
                data={{
                    fieldType: 'CHECKBOX',
                    label: 'Checkbox',
                    value: checkboxValue,
                    options: details
                }}
                changeHandler={handleChangeHandler(setCheckboxValue)}
            />
            <CommonField
                data={{
                    fieldType: 'DROPDOWN',
                    label: 'Dropdown',
                    value: dropdownValue,
                    options: details
                }}
                changeHandler={handleChangeHandler(setDropdownValue)}
            />
        </div>
    );
}

export default App;