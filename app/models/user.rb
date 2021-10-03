class User < ApplicationRecord
    validates :email, uniqueness: { case_sensitive: false, message: " %{value} já cadastrado. Tente um email diferente." }
end