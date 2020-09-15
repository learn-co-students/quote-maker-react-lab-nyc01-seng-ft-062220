import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {

  renderQuotes = () => {
    return (this.props.quotes.map(quote => {
      console.log("RENDER QUOTE :", quote)
      return (
        <QuoteCard key={quote.id} quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote}/>
      )
    })
    )
  }


  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = dispatch => {
  return ({
    removeQuote: id => {dispatch(removeQuote(id))},
    upvoteQuote: id => {dispatch(upvoteQuote(id))},
    downvoteQuote: id => {dispatch(downvoteQuote(id))},
  })
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
