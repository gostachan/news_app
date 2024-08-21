class ArticlesController < ApplicationController

  def index
    require 'news-api'
    newsapi = News.new("f53bd8d68da5494ab0a26258fd42054e")
    @articles = newsapi.get_top_headlines(country: 'jp')
  end

end
