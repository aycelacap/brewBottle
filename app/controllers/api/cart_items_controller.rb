class Api::CartItemsController < ApplicationController

#    before_action :require_logged_in! , only: [:create]
    
    def index
        # @cart_items = current_user.cart_items
        # render :index
        if current_user
            @cart_items = current_user.cart_items
        else
            @cart_items = []
        end
        render :index
    end

    def create
        # debugger
        @cart_item = CartItem.new(cart_items_params)
        # @cart_item.product_id = cart_items_params[:product][:id]
        # @cart_item.quantity = cart_items_params[:product][:quantity]
        # @cart_item.user_id = @current_user.id

        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render :show
    end

    private
    def cart_items_params
        # params.require(:cart_item).permit(:product => [:category_id, :name, :description, :price, :item_type])
        # # or
        params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end

    # rewrite jbuilder 
    # look (copy) at albys fsp
end
  
