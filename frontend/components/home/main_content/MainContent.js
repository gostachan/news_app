import Headings from '../headings/headings'
import TrendArticles from '../trend_articles/TrendArticles'
import Advatisement from '../../advertisement/Advatisement'
import variables from './MainContent.scss'

export default function MainContent() {

  return (
      <div className="main-content">
        <Headings/>
        <TrendArticles/>
        <Advatisement width="30%"/>
      </div> 
  )
}