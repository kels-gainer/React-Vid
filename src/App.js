import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import { VideoList, VideoListItem } from "./components/VideoList";
import _ from "lodash";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.searchUTube("red pandas")
  }

  // template...function declaration so placeholder value = "term"
  searchUTube = term => {
    API.searchYouTube(term)
    // will capture the return value from the call above
    .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] }))
    .catch(err => console.log(err));
  }

  onVideoSelect = selectedVideo => {
    // if key is the same name as the value can just use one smae as => selectedVideo: selectedVideo
    this.setState({ selectedVideo  });
  }

  // gives a delay so that it doesn't bog down browser and overuse the api
  throttleSearch = _.debounce(this.searchUTube, 800)

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>U Tube React Search</h1>
            <SearchBar searchUTube={this.throttleSearch} />
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <VideoDetail selectedVideo={this.state.selectedVideo} />
          </Col>
          <Col md="4">
            <VideoList>
              {this.state.videos.map(video => (
                <VideoListItem
                  video={video}
                  key={video.id.videoId} 
                  selectedVideo={this.state.selectedVideo}
                  onVideoSelect={this.onVideoSelect}
                  />
              ))}
            </VideoList>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
