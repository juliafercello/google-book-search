// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// // import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

// class Detail extends Component {
//   state = {
//     book: {}
//   };
//   // When this component mounts, grab the book with the _id of this.props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getBook(this.props.match.params.id)
//       .then(res => this.setState({ book: res.data }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <form>
//       <Input
//         value={this.state.title}
//         onChange={this.handleInputChange}
//         name="title"
//         placeholder="Title (required)"
//       />
//       <Input
//         value={this.state.author}
//         onChange={this.handleInputChange}
//         name="author"
//         placeholder="Author (required)"
//       />
//       <TextArea
//         value={this.state.synopsis}
//         onChange={this.handleInputChange}
//         name="synopsis"
//         placeholder="Synopsis (Optional)"
//       />
//       <FormBtn
//         disabled={!(this.state.author && this.state.title)}
//         onClick={this.handleFormSubmit}
//       >
//         Submit Book
//       </FormBtn>
//     </form>

//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>
//                 {this.state.book.title} by {this.state.book.author}
//               </h1>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Synopsis</h1>
//               <p>
//                 {this.state.book.synopsis}
//               </p>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/">← Back to Authors</Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Detail;
