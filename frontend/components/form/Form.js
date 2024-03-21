import ForgetPassButton from '../foget_pass_button/ForgetPassButton'
import FormButton from '../form_button/FormButton'
import Input from '../input/Input'
import variables from './Form.scss'

export default function Form() {
  
  return (
      <form action="/login" method="post">
        <h1>Log in</h1>
        <Input type="text" id="username" name="username" placeholder="email" />
        <Input type="password" id="password" name="password" placeholder="password" />
        <ForgetPassButton/>
        <FormButton value="login"/>
      </form>
  )
}