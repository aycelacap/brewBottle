export const getSearchResults = (searchString) => {
    debugger
    return $.ajax({
        url: `/api/products/search/${searchString}`,
        method: "GET"
    })
}

// you cant place a debugger with implicit return 