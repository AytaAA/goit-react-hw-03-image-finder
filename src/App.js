//data

import React, { Component } from "react"
// components
import OnLoader from "./Components/Loader"
import Button from "./Components/Button"
import Container from "./Components/Container"

import ImageGallery from "./Components/ImageGallery"
import Modal from "./Components/Modal"
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
        modalImage: "",
    }

    onSubmit = (e) => {
        e.preventDefault()

        const { searchQuery } = this.state

        this.setState({ isLoading: true })
        fetchAPI(searchQuery, 1)
            .then((response) => this.setState({ images: response.data.hits, currentPage: 1 }))
            .catch((error) => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }))
    }

    onLoadMore = () => {
        const { searchQuery, currentPage } = this.state
        this.setState({ isLoading: true })
        fetchAPI(searchQuery, currentPage + 1)
            .then((response) =>
                this.setState((prevState) => ({
                    images: [...prevState.images, ...response.data.hits],
                    currentPage: prevState.currentPage + 1,
                }))
            )
            .catch((error) => this.setState({ error }))
            .finally(() => {
                this.setState({ isLoading: false })

                window.scrollTo({
                    top: document.querySelector("#imagesList").scrollHeight,
                    behavior: "smooth",
                })
            })
    }

    onSetQuery = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleOpenModal = (e) => {
        this.setState({ modalImage: e.target.dataset.source, showModal: true })
    }

    handleCloseModal = (e) => {
        if (e.target.nodeName !== "IMG") {
            this.setState({ showModal: false, modalImage: "" })
        }
    }

    render() {
        return (
            <Container>
                <Searchbar onSubmit={this.onSubmit} onSetQuery={this.onSetQuery} searchQuery={this.state.searchQuery} />
                <ImageGallery images={this.state.images} handleOpenModal={this.handleOpenModal} />
                {this.state.isLoading && <OnLoader />}
                {this.state.showModal && (
                    <Modal modalImage={this.state.modalImage} handleCloseModal={this.handleCloseModal} />
                )}

                {this.state.images.length > 0 && <Button onLoadMore={this.onLoadMore} />}
            </Container>
        )
    }
}

export default App
