class Api::SearchController < ApplicationController

    def index
        # debugger
        # double check params are coming in correctly 
        # double check correct products are coming in

        # @products = Product.where("LOWER(name) LIKE ?", "%#{params[:name]}%")
        @products = Product.where("LOWER(name) LIKE ?", "%#{params[:searchString]}%")
        render 'api/products/index'   
    end
end