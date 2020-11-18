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

    # def search 
    #     search_query = params[:search_query]
    #     # debugger
    #     # look here and look for what params looks like here
    #     # custom sql query
    #     puts search_query
    # end

    def search
        query = params[:query]
        
        @products = Product.where('name ILIKE ? OR description ILIKE ?', "%#{query}%","%#{query}%")
        # Product.where("name like ? AND locked = ?", params[:orders], false)
        if @products.length>0
            render :index
        else
            render json: ["We couldn't find any results for #{query}","Try searching for something else instead?"], status: 422 
        end
    end

    private 
    def product_params
        params.require(:product).permit(:category_id, :name, :description, :item_type, :price, :query)
    end
end

# change the search params