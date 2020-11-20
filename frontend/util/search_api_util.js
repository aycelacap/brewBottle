export const getSearchResults = (searchString) => {
    // debugger
    return $.ajax({
        url: '/api/search',
        method: "GET",
        data: {searchString},
    })
}

// you cant place a debugger with an implicit return 