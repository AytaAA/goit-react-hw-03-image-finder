import style from "./Button.module.css"

const Button = ({ onLoadMore }) => {
    return (
        <button onClick={onLoadMore} className={style.button} type="button">
            Load More
        </button>
    )
}

export default Button
