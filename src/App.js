import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import { Jumbotron, Button } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
        <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
        <Card
          imageLink="https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1232048ba13c45b7726c9821fed93528&auto=format&fit=crop&w=500&q=60"
          imageTitle="Putri Malu"
          cardTitle="Judul"
          cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
          colorType="primary"
          btnLink="https://www.google.com"
          btnTitle="Berangkat"
        />
      </div>
    );
  }
}

export default App;
