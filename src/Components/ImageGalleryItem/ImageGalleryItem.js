import style from "./ImageGalleryItem.module.css"

const ImageGalleryItem = ({ images, handleOpenModal }) => {
    return images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id} className={style.ImageGalleryItem} onClick={handleOpenModal}>
            <img src={webformatURL} data-source={largeImageURL} alt="" className={style.img_image} />
        </li>
    ))
}

export default ImageGalleryItem
