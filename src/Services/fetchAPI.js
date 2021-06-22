import axios from "axios"
const API_KEY = "21317106-c659fedc0d15d06b08e9b95b0"
const BASE_URL = "https://pixabay.com/api/"

const fetchApi = ({ searchQuery, page }) => {
    return axios.get(
        `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
}

export default fetchApi
