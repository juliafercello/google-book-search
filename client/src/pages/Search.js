import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import ResultsCard from "../components/ResultsCard";
import CardContainer from "../components/CardContainer";
import { Input, FormBtn } from "../components/SearchForm";

class Search extends Component {
    state = {
        books: [],
        bookSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchBooks(this.state.bookSearch)
            .then(res => {
                console.log(res.data);
                this.setState({ books: res.data });
                this.setState({ bookSearch: "" });
            })
            .catch(err => console.log(err));
    };

    saveBook = (index) => {
        API.saveBook({
            title: this.state.books[index].volumeInfo.title,
            authors: this.state.books[index].volumeInfo.authors,
            description: this.state.books[index].volumeInfo.description,
            link: this.state.books[index].volumeInfo.previewLink,
            image: this.state.books[index].volumeInfo.imageLinks.thumbnail
        })
            .then(res => alert(`${this.state.books[index].volumeInfo.title} was saved successfully!`))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <CardContainer message="Book Search">
                    <form>
                        <Input
                            name="bookSearch"
                            value={this.state.bookSearch}
                            onChange={this.handleInputChange}
                        />
                        <FormBtn
                            onClick={this.handleFormSubmit}
                            type="submit"
                            className="btn btn-info"
                        >
                            Search
                        </FormBtn>
                    </form>
                </CardContainer>
                <CardContainer message="Search Results">
                    {this.state.books.length ? (
                        <div>
                            {this.state.books.map((book, index) => (
                                <div>
                                    <ResultsCard
                                        title={book.volumeInfo.title}
                                        authors={book.volumeInfo.authors}
                                        description={book.volumeInfo.description}
                                        link={book.volumeInfo.previewLink}
                                        image={book.volumeInfo.imageLinks.thumbnail}
                                        key={book.id}
                                        index={index}
                                        saveBook={() => this.saveBook(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (<h3>No Results to Display</h3>)}
                </CardContainer>
            </div >
        )
    }
}

export default Search;
