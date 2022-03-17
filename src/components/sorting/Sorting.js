import Button from '../button/Button';

import './sorting.scss';

const Sorting = (props) => {
  
  const { onClick } = props;

  return (
    <div className='sorting'>
      <div>Сортировка</div>
      <Button text="по городу" onClick={() => {onClick('city')}}/>
      <Button text="по компании" onClick={() => {onClick('company')}}/>
    </div>
  )
}

export default Sorting;