import variables from './TrendArticles.scss'

export default function TrendArticles() {

  return (
    <div className="trend-articles">
      <div className="breaking-articles">
        <div className="breaking-article">
          <a href="#">
            <p className="type">速報</p>
            <p className="title">大谷結婚</p>
          </a>
        </div>
        <div className="breaking-article">
          <a href="#">
            <p className="type">速報</p>
            <p className="title">大谷結婚</p>
          </a>
        </div>
      </div>
      <div className="hot-articles">
        <h1>ランキング</h1>
        <div className="hot-article">
          <div className="rank">
            <h1>1. </h1>
          </div>
          <div className="title">
            <a>
              「あんまり心開かないタイプなので」　若き日の大谷翔平が語っていた他人への「信頼」
            </a>
          </div>
          <img src="../imgs/test-img.webp" alt="" />
        </div>
      </div>
    </div>
  )
}