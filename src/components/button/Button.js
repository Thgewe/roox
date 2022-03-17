import './button.scss';

const Button = (props) => {

  const { text, onClick } = props;

  return (
    <button className='custom-btn' onClick={onClick}>{text}</button>
  )
}

export default Button;