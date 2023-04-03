import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div class="position-absolute top-50 start-50 translate-middle">
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner

