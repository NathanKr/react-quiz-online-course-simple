import React from 'react'

export default class Huggable extends React.Component {
    hug(id) {
      console.log("hugging " + id);
    }
    render() {
      let name = "kitten";
      // -- fourth answer
      let button = <button onClick={(e) => this.hug(name, e)}>Hug Button</button>;

      // --- following also working but not in answers
      // let button = <button onClick={() => this.hug(name)}>Hug Button</button>;


      return button;
    }
  }