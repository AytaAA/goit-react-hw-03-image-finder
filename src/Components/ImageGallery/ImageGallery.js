import ImageGalleryItem from "../ImageGalleryItem"
import style from "./ImageGallery.module.css"

const ImageGallery = ({ images, handleOpenModal }) => {
    return (
        <ul className={style.ImageGallery} id="imagesList">
            <ImageGalleryItem images={images} handleOpenModal={handleOpenModal} />
        </ul>
    )
}

export default ImageGallery
