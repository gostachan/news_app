import variables from './Input.scss'

export default function Input (props) {

  return (
    <div className='form-group'>
      <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}/>
    </div>
  )
} 