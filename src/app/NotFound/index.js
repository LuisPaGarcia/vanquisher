import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        Not Found
        <br />
        <Link to="/">
          <button className="bg-red-400 hover:bg-red-200 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }
}
