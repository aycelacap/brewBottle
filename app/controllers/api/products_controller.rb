class Api::ProductsController < ApplicationController
    def index
        if params[:category_id]
            @products = Product.where(category_id: params[:category_id])
        else
            # debugger
            @products = Product.all
        end
        # render "api/products/index"
        # render "/products"
        render :index
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end

    # we need to write a search function here
    # additional parameters

    def search 
        search_query = params[:search_query]
        debugger
        # look here and look for what params looks like here
        # custom sql query
        puts search_query
    end

    private 
    def product_params
        params.require(:product).permit(:category_id, :name, :description, :item_type, :price, :search_query)
    end
end

# change the search params