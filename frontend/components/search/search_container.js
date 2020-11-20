import { connect } from 'react-redux'
import Search from './search'
import { getResults, clearSearch } from '../../actions/search_actions'

const mapStateToProps = (state, ownProps) => ({
    searches: state.entities.search || [],
    // results: Object.values(state.entities.searchReducer)
})

const mapDispatchToProps = dispatch => ({
    getResults: search => dispatch(getResults(search)),
    clearSearch: () => dispatch(clearSearch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)