import variables from './page.scss'
import Header from '../../components/header/Header'
import MainContent from '../../components/home/main_content/MainContent'

export default function Page() {
  return (
    <div className="container">
      <Header/>
      <MainContent/>
    </div>
  )
}