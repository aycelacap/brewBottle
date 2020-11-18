import * as SearchAPIUtil from '../util/search_api_util';
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS"
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

const receiveSearchResults = (searchResults) => ({
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
})

export const clearSearch = () => ({
    type: CLEAR_SEARCH
});

export const getResults = searchString => dispatch => {
    debugger
    SearchAPIUtil.getSearchResults(searchString)
        .then(results => dispatch(receiveSearchResults(results)))
};

// <video class="bg-white shape-content z-index-1" autoplay="autoplay" loop="loop" muted="muted" poster="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/video/upload/q_100/v1604951514/qovhlkl1o0mniiihvkvh.jpg"><source src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/video/upload/q_100/v1604951514/qovhlkl1o0mniiihvkvh.webm" type="video/webm"><source src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/video/upload/q_100/v1604951514/qovhlkl1o0mniiihvkvh.mp4" type="video/mp4"><source src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/video/upload/q_100/v1604951514/qovhlkl1o0mniiihvkvh.ogv" type="video/ogg"></video>