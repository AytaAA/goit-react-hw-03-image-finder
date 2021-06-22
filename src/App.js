//data
import axios from "axios"
import React, { Component } from "react"
// components
import Loader from "./Components/Loader"
import Button from "./Components/Button"
import Container from "./Components/Container"

import ImageGallery from "./Components/ImageGallery"
// import Modal from "./Components/Modal"
import Searchbar from "./Components/Searchbar"
import fetchAPI from "./Services/fetchAPI.js"

class App extends Component {
    state = {
        images: [],
        currentPage: 1,
        searchQuery: "",
        isLoading: false,
        error: null,
        showModal: false,
    }

    onSubmit = (e) => {
        e.preventDefault()

        const { searchQuery, currentPage } = this.state

        this.setState({ isLoading: true })
        fetchAPI(searchQuery, currentPage)
            .then((response) => this.setState({ images: response.data.hits }))
            .catch((error) => this.setState.apply({ error }))
            .finally(() => this.setState({ isLoading: false }))
    }

    onLoadMore = () => {
        const { searchQuery, currentPage } = this.state
        //this.setState({ isLoading: true })
        fetchAPI(searchQuery, currentPage + 1)
            .then((response) =>
                this.setState((prevState) => ({
                    images: [...prevState.images, ...response.data.hits],
                    currentPage: prevState.currentPage + 1,
                }))
            )
            .catch((error) => this.setState.apply({ error }))
            .finally(() => this.setState({ isLoading: false }))
    }

    onSetQuery = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Container>
                <Searchbar onSubmit={this.onSubmit} onSetQuery={this.onSetQuery} searchQuery={this.state.searchQuery} />
                <ImageGallery images={this.state.images} />
                {/* <Loader /> */}
                <Button onLoadMore={this.onLoadMore} />
            </Container>
        )
    }
}

export default App

// window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: "smooth",
// })
