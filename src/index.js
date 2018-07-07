import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [{ "year": "1929", "description": "Martin Luther King Jr. was born to Martin Luther King Sr. and Alberta Williams King." }, { "year": "1948", "description": "Martin graduated with a B.A. in sociology from Morehouse College." }, { "year": "1951", "description": "Martin graduated with a B. Div. degree from Crozer Theological Seminary." }, { "year": "1953", "description": "Martin married Coretta Scott." }, { "year": "1954", "description": "Martin was called as pastor of the Dexter Avenue Baptist Church in Montgomery, Alabama." }, { "year": "1955", "description": "Martin received his Ph.D. degree in systematic theology." }, { "year": "1955", "description": "Martin would lead the Montgomery Bus Bpycott that would last a year." }, { "year": "1957", "description": "Martin and other civil rights activist would help find the Southern Christian Leadership Conference (SCLC)." }, { "year": "1961", "description": "Martin would lead a movement in Albany, Georgia." }, { "year": "1963", "description": "Martin would lead a march in Birmingham, Alabama, and he would get arrested and go to jail." }, { "year": "1965", "description": "Martin would lead a march in Selma." }, { "year": "1966", "description": "Martin would a Chicago Freedom Movement." }, { "year": "1968", "description": "Martin organizes a Poor People's Campaign." }, { "year": "1968", "description": "Martin would be assassinated on a balcony of a motel in Memphis, Tennesse." }]
    }
  }
  render() {
    return (
      <div id="main">
        <div id="title">
          <h1>Dr. Martin Luther King Jr.</h1>
        </div>
        <div id='img-div'>
          <div id='image'>
            <img src='http://www.bluestreetcapital.com/wp-content/uploads/2018/01/mlk.jpg' alt= 'Martin waving his hand to a crowd' />
              <div id='image-caption'>
                <p>Martin Luther King getting ready to present his famous 'I Have a Dream Speech'</p>
              </div>
          </div>
        </div>
        <div id="tribute-info">
          <ul>
          {
            this.state.events.map((event) => <li className="Oreos"><strong>{event.year}</strong> - {event.description}</li>)
          }
          </ul>
        </div>
        <blockquote>
        <p>Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.</p>
        <div>~ Dr. Martin Luther King</div>
        </blockquote>
        <h3>If you want to learn more about Dr. Martin Luther King Jr., you can click here on his <a id='tribute-link' href='https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.' target="_blank">Wikipedia page</a>.</h3>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
