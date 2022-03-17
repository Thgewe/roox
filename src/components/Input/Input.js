import { useState, useEffect } from 'react';

import './input.scss';

const Input = (props) => {

  const { name, placeholder, value, valid, readOnly, setIsFormValid } = props;
  const [ isValid, setIsValid ] = useState(true);
  const [ newValue, setNewValue ] = useState('');
  useEffect(() => {
    setNewValue(value);
  }, [])

  const onChange = async (e) => {
    setNewValue(e.target.value)
    validation(e.target.value);
  }

  const validation = (value) => {
    setIsValid(true);
    setIsFormValid(true);
    if (value.length === 0) {
      setIsValid(false);
      setIsFormValid(false);
    }
    if (value.search(valid) === -1 && valid !== undefined) {
      setIsValid(false);
      setIsFormValid(false);
    }

  }

  let className = isValid ? null : 'invalid';

  return (
    <div className='custom-input'>
      <div>{name}</div>
      <input
        placeholder={placeholder}
        value={newValue}
        onChange={onChange}
        readOnly={readOnly}
        name={name}
        className={className}/>
    </div>
  )
}

export default Input;