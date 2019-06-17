import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <CardContainer message="Saved Books">
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
                    deleteBook={() => this.deleteBook(book._id)}
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

export default SavedBooks;
