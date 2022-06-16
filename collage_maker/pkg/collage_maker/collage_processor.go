package collage_maker

import (
	"image"
	"image/color"
	"image/draw"
	"image/jpeg"
	"net/http"

	"github.com/anyuan-chen/record/proto/pkg/collage_maker_pb"
	"github.com/nfnt/resize"
)

type Collage struct {
	val *image.RGBA
}

func (c *Collage) Set(x, y int, col color.Color) {
	c.val.Set(x, y, col)
}
func (c *Collage) ColorModel() color.Model {
	return c.val.ColorModel()
}
func (c *Collage) Bounds() image.Rectangle {
	return c.val.Bounds()
}
func (c *Collage) At(x, y int) color.Color {
	return c.val.At(x, y)
}
func (c *Collage) drawOnCollage(subImg image.Image, sp image.Point, width uint, height uint) {
	resizedSubImg := resize.Resize(width, height, subImg, resize.Lanczos3)
	w := int(Width(resizedSubImg))
	h := int(Height(resizedSubImg))
	draw.Draw(c, image.Rectangle{sp, image.Point{sp.X + w, sp.Y + h}}, resizedSubImg, image.Point{0, 0}, draw.Src)
}
func Width(image image.Image) uint {
	return uint(image.Bounds().Max.X - image.Bounds().Min.X)
}
func Height(image image.Image) uint {
	return uint(image.Bounds().Max.Y - image.Bounds().Min.Y)
}
func CreateCollage(rowNum int, colNum int, images []image.Image, heightOfImage int, widthOfImage int) *Collage {
	bottomRightPoint := image.Point{heightOfImage * rowNum, widthOfImage * colNum}
	output := Collage{image.NewRGBA(image.Rectangle{image.Point{0, 0}, bottomRightPoint})}
	row := 1
	col := 1
	for i := range images {
		go DrawImageOntoCollage(row, col, heightOfImage, widthOfImage, images[i], &output)
		if col == colNum {
			col = 1
			row++
		} else {
			col++
		}
	}
	return &output
}

func DrawImageOntoCollage(row, col, height, width int, subImg image.Image, collage *Collage) {
	collage.drawOnCollage(subImg, image.Point{(col - 1) * width, (row - 1) * height}, uint(width), uint(height))
}

func GetImagesFromUrls(images *collage_maker_pb.Images) ([]image.Image, error) {
	processedImages := make([]image.Image, 0, len(images.Images))
	for _, pbImage := range images.Images {
		resp, err := http.Get(pbImage.ImageURL)
		if err != nil {
			processedImages = append(processedImages, &image.RGBA{})
			continue
		}
		defer resp.Body.Close()
		decodedImage, err := jpeg.Decode(resp.Body)
		if err != nil {
			processedImages = append(processedImages, &image.RGBA{})
			continue
		}
		processedImages = append(processedImages, decodedImage)
	}
	return processedImages, nil
}
