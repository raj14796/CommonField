import React from 'react';
import Wrapper from './Wrapper';

const CommonField = ({
  data = {},
  changeHandler = () => { }
}) => {
  let {
    fieldType,
    label = '',
    value,
    options = []
  } = data;
  const handleChangeText = (e) => {
    const newValue = e.target.value;
    changeHandler({ ...data, value: newValue })
  }

  const handleChangeCheckbox = (index) => () => {
    const newValue = JSON.parse(JSON.stringify(value));
    newValue[index].isChecked = !newValue[index]?.isChecked;
    changeHandler({ ...data, value: newValue });
  }

  const handleChangeDropdown = (e) => {
    const newValue = JSON.parse(JSON.stringify(value));
    newValue.id = e.target.value;
    newValue.name = e.target.name;
    changeHandler({ ...data, value: newValue });
  }

  switch (fieldType) {
    case 'TEXT':
      return (
        <Wrapper>
          <label className='title-label' htmlFor={label}>{label}</label>
          <input type='text' name={label} value={value} onChange={handleChangeText} />
        </Wrapper>
      );
    case 'CHECKBOX':
      return (
        <Wrapper>
          <label className='title-label' htmlFor={label}>{label}</label>
          {
            options.map((anOption, index) => {
              return (
                <div className='flex flex-row' key={anOption.id}>
                  <input type="checkbox" name={anOption.name} id={anOption.id} value={anOption.id} onClick={handleChangeCheckbox(index)} />
                  <label htmlFor={anOption.id}>{anOption.name}</label>
                </div>
              )
            })
          }
        </Wrapper>
      );
    case 'DROPDOWN':
      return (
        <Wrapper>
          <label className='title-label' htmlFor={label}>{label}</label>
          <select onChange={handleChangeDropdown}>
            <option selected disabled>---Select---</option>
            {
              options.map(anOption => {
                return (
                  <option key={anOption.id} name={anOption.name} value={anOption.id}>{anOption.name}</option>
                )
              })
            }
          </select>
        </Wrapper>
      );
    default:
      return null;
  }
}

export default CommonField