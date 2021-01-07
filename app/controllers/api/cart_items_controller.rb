class Api::CartItemsController < ApplicationController

   before_action :require_logged_in! , only: [:create]
    
    def index
        # @cart_items = current_user.cart_items
        # render :index
        # can use a .includes so we can include a secondary model

        # https://apidock.com/rails/ActiveRecord/QueryMethods/includes
        # rewrite this to be on the class
        # rework QUERY where we call CartItems class .CartItems.includes.products WHERE USER.iD == currentUser.ID

        # json jbuilder (how we format the obj that should be sent up to frontend)
        # and format the object correctly

        # put in debuggers in index and 



        # go to a/A open and find the SQL includes 

        # START 1/5
        # if current_user
        #     # @cart_items = current_user.cart_items
        #     # @products = @cart_items.product
        #     @cart_items = CartItem.includes(:product).where(:user_id == current_user.id)
        # else
        #     @cart_items = []
        # end
        # render :index
        # END 1/5

        @cart_items = current_user.cart_items
        render :index
    end

    def show 
        @cart_item = CartItem.find(params[:id])
        render :show
    end


    def create
        # START 1/5
        # # debugger
        # existingCart = CartItem.find_by(user_id: cart_items_params[:user_id], product_id: cart_items_params[:product_id])

        # if existingCart
        #     @cart_item = existingCart
        #     # @cart_item.update(quantity: @cart_item.quantity + 1)
        #     render :show
        # else

        

        #     @cart_item = CartItem.new(cart_items_params)
        #     # @cart_item.product_id = cart_items_params[:product][:id]
        #     # @cart_item.quantity = cart_items_params[:product][:quantity]
        #     # @cart_item.user_id = @current_user.id

        #     if @cart_item.save
        #         render :show
        #     else
        #         render json: @cart_item.errors.full_messages, status: 422
        #     end
        # end
        # END 1/5

        # 1/6 in the case that a cart exists, we need to specify that
        existingCart = CartItem.find_by(user_id: cart_items_params[:user_id], product_id: cart_items_params[:product_id], quantity: cart_items_params[:quantity])

        if existingCart
            @cart_item = existingCart
            render :show
        else
            @cart_item = CartItem.new(cart_items_params)
        
            if @cart_item.save
                render :show
            else
                render json: @cart_item.errors.full_messages, status: 422
            end
        end
    end

    # START 1/5
    # def update
    #     @cart_item = CartItem.find_by(id: params[:id])
    #     # debugger
    #     if @cart_item.update(cart_item_params)
    #         render :show
    #     else 
    #         render json: @cart_item.errors.full_messages, status: 422
    #     end
    # end
    # END 1/5

    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        @cart_item.destroy
        render :show
    end

    private
    def cart_items_params
        # TELLING FRONTEND WHAT IS ALLOWED TO SEND DOWN TO BACKEND, not related to what backend is sending to fronend 
        # params.require(:cart_item).permit(:product => [:category_id, :name, :description, :price, :item_type])
        params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end

    # rewrite jbuilder 

    # # or
        # params.require(:cart_item).permit(:user_id, :product_id, :quantity)
end
  
