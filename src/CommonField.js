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
    value = e.target.value;
    changeHandler({ ...data, value })
  }

  const handleChangeCheckbox = (index) => () => {
    value[index].isChecked = !value[index]?.isChecked;
    changeHandler({ ...data, value });
  }

  const handleChangeDropdown = (e) => {
    console.log('e.target >>', e.target)
    console.log('e.target.value >>', e.target.value)
    console.log('e.target.name >>', e.target.name)
    value.id = e.target.value;
    value.name = e.target.name;
    console.log('value >> ', value)
    changeHandler({ ...data, value });
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
            <option disabled>---Select---</option>
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