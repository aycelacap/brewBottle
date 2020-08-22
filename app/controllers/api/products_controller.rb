class Api::ProductsController < ApplicationController
    def index
        if params[:category_id]
            @products = Product.where(category_id: params[:category_id])
        else
            @products = Product.all
        end
        render :index
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end

    private 
    def product_params
        params.require(:product).permit(:category_id, :name, :description, :item_type, :price, :photo)
    end
end
