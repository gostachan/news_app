import Advatisement from '../../../components/advertisement/Advatisement'
import ForgetPassButton from '../../../components/foget_pass_button/ForgetPassButton'
import FormButton from '../../../components/form_button/FormButton'
import Input from '../../../components/input/Input'
import LoginForm from '../../../components/login_form/LoginForm'
import variables from './page.scss'

export default function LoginPage() {
  
  return (
    <div className="container">
      <Advatisement/>
      {/* <div className="login-form">
        <div className="content">
          <form action="/login" method="post">
            <h1>Log in</h1>
            <Input type="text" id="username" name="username" placeholder="email" />
            <Input type="password" id="password" name="password" placeholder="password" />
            <ForgetPassButton/>
            <FormButton value="login"/>
          </form>
        </div>
      </div> */}
      <LoginForm/>
    </div>
  )
}