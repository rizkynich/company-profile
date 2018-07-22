import React from "react";
import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import MondokContainer from "./containers/MondokContainer";
import AboutContainer from "./containers/AboutContainer";
import KajianKodingContainer from "./containers/KajianKodingContainer";

class App extends React.Component {
  state = {
    page: "home"
  };

  ganti = page => {
    this.setState({
      page: page
    });
  };

  render() {
    return (
      <div>
        <Header pindahHalaman={this.ganti} />
        {/* <button onClick={()=>{this.ganti('home')}}>Home</button>
        <button onClick={()=>{this.ganti('about')}}>Tentang Kami</button>
        <button onClick={()=>{this.ganti('kajian')}}>Kajian</button>
        <button onClick={()=>{this.ganti('mondok')}}>Mondok</button>
        <button onClick={()=>{this.ganti('santren')}}>Santren Kilat</button> */}

        {this.state.page === "home" && <HomeContainer />}
        {this.state.page === "about" && <AboutContainer />}
        {this.state.page === "kajian" && <KajianKodingContainer />}
        {this.state.page === "mondok" && <MondokContainer />}
      </div>
    );
  }
}

export default App;
