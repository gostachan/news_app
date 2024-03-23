import Advatisement from '../../../components/advertisement/Advatisement'
import ForgetPassButton from '../../../components/foget_pass_button/ForgetPassButton'
import FormButton from '../../../components/form_button/FormButton'
import Input from '../../../components/input/Input'
import LoginForm from '../../../components/login_form/LoginForm'
import variables from './page.scss'

export default function LoginPage() {
  
  return (
    <div className="container">
      <Advatisement width="45%" height="80%" margin="0 10% 0 0" />
      <LoginForm/>
    </div>
  )
}