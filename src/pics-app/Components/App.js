import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';


class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            images: []
        }

    }

    handleSearch = async (searchTerm) =>  {
        const result = await unsplash.get('/search/photos', {
            params: {
                query: searchTerm
            }
        });

        this.setState({images: result.data.results})
    }


    render() {
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.handleSearch} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;