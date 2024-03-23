import variables from './Header.scss'

export default function Header() {

  return (
    <div className="header">
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="app-logo">
            <h1>ロゴ</h1>
          </div>
        </div>
        <div className="top-bar-right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>検索</button>
          </div>
          <button>login</button>
        </div>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <a href="#">主要</a>
          </li>
          <li>
            <a href="#">国内</a>
          </li>
          <li>
            <a href="#">国際</a>
          </li>
          <li>
            <a href="#">経済</a>
          </li>
          <li>
            <a href="#">エンタメ</a>
          </li>
          <li>
            <a href="#">スポーツ</a>
          </li>
          <li>
            <a href="#">IT</a>
          </li>
          <li>
            <a href="#">科学</a>
          </li>
          <li>
            <a href="#">ライフ</a>
          </li>
          <li>
            <a href="#">地域</a>
          </li>
        </ul>
      </div>
    </div>
  )
}