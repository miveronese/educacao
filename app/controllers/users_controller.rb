class UsersController < ApplicationController
    
    def create
      @user = User.new(user_params)
      if @user.save
        redirect_to root_url, notice: "Email enviado com sucesso!"
      else
        redirect_to root_url, notice: @user.errors.full_messages[0]
      
      end
    end

    private
    def user_params
      params.require(:user).permit(:email)
    end
end
