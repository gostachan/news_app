import variables from './FormButton.scss'

export default function FormButton (props) {

  return (
    <div className='form-button form-group'>
      <button type='submit'>
        {props.value}
      </button>
    </div>
  )
} 