import React from "react";
import SearchBar from "./SearchBar";
import YouTubeSearch from "../api/YouTubeApi";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
      this.onSubmit('wtfaiwpodcast');
  }

  onSubmit = async term => {
    const results = await YouTubeSearch.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ results: results.data.items, selectedVideo: results.data.items[0] });
  };

  onVideoSelect = video => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.results}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
