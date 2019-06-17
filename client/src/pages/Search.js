import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import { Input, TextArea, FormBtn } from "../components/SearchForm";

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
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.searchBooks(this.state.bookSearch)
            .then(res => {
                console.log(res.data);
                this.setState({ books: res.data });
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.title && this.state.author) {
    //         API.saveBook({
    //             title: this.state.title,
    //             author: this.state.author,
    //             synopsis: this.state.synopsis
    //         })
    //             .then(res => this.loadBooks())
    //             .catch(err => console.log(err));
    //     }
    // };

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
                            {this.state.books.map(book => (
                                <div>
                                    <Card
                                        key={book._id}
                                        title={book.title}
                                        description={book.description}
                                        authors={book.authors}
                                        image={book.image}
                                        link={book.link}
                                    // handleClickEvent={this.handleClickEvent}
                                    // deleteBook={() => this.deleteBook(book._id)}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (<h3>No Results to Display</h3>)}
                </CardContainer>
            </div>
        )
    }
}

export default Search;
