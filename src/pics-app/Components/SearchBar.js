import React from 'react';

class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = {term: ''}
    }

    onSubmit = (e) => {
        e.preventDefault();
    }
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Image Serch:</label>
                        <input type="text" 
                            value={this.state.term}
                            onChange = {(e) => this.setState({term: e.target.value})}
                        />

                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;