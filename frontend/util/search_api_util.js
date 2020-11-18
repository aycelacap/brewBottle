export const getSearchResults = (searchString) => {
    // debugger
    return $.ajax({
        // url: `/api/products/search/${searchString}`,
        url: `/api/products/${searchString}`,
        method: "GET"
    })
}

// you cant place a debugger with an implicit return 