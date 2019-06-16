import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
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

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        <Jumbotron />
        <CardContainer message="Saved Books">
        {/* {this.state.books.length ? ( */}
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
        {/* ) : (<h3>No Results to Display</h3>)} */}
        </CardContainer>
      </div>
    )
  }
}

export default SavedBooks;
