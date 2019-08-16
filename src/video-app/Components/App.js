import React from 'react';
import SearchBar from './SearchBar';
import YouTubeSearch from '../api/YouTubeApi';
import VideoList from './VideoList';

class App extends React.Component {

    constructor()
    {
        super();
        this.state = {
            results: []
        }
    }

    onSubmit = async term => {
        const results = await YouTubeSearch.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({results: results.data.items});
    }

    render() {
        return <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSubmit}/>
            <VideoList videos={this.state.results}/>
        </div>
    }
}

export default App;