import style from "./Searchbar.module.css"

const Searchbar = ({ onSetQuery, searchQuery, onSubmit }) => {
    return (
        <header className={style.search_bar}>
            <form onSubmit={onSubmit} className={style.search_form}>
                <button type="submit" className={style.search_form_button}>
                    <span className={style.search_form_buttonLabel}>Search</span>
                </button>

                <input
                    className={style.search_form_input}
                    onInput={onSetQuery}
                    name="searchQuery"
                    value={searchQuery}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

export default Searchbar
// {style.}
