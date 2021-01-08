import React from 'react'
import SearchItem from "./search_item";

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            // search: 1
        }

    }

    // we want to handle the input of the user
    handleSearch(e) {
      // debugger
        if (e.target.value === "") {
            this.props.clearSearch()
        } else {
            // this.props.updateIndex(Object.values(this.props.results))
            this.props.getResults(e.target.value)
            // .then(() => {
            //     this.setState({
            //         search: this.state.search + 1
            //     })
            // })

        }
    }

    componentDidMount() {
        this.props.clearSearch()

    }

    render() {
        console.log("hello", this.props.results)
        
        const searchResults = this.props.searches.map(product => (
            <SearchItem clearSearch={this.props.clearSearch} key={product.id} product={product} />))
            // console.log(this.props)
            // find where the search component is placed
            // and then study lifecycles
            return (
                <div className="search-bar">
                <div className="searchbar-icon">
                    {/* <i className="fas fa-search searchIcon"></i> */}
                    <input className='searchbox' onChange={this.handleSearch} type="text" placeholder="Search"/>
                </div>
                <div className="search-body-result">
                    {searchResults.slice(0, 4)}
                </div>
            </div>
        )
    }
}

export default Search

