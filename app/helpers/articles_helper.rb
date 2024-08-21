module ArticlesHelper

  def square_image(img_url)
    require "mini_magick"
    begin
      image = MiniMagick::Image.open(img_url)
      image.resize "500x500"
      return image
    rescue
    end
  end

end
