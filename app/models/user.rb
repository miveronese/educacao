class User < ApplicationRecord
    validates :email, uniqueness: { case_sensitive: false, message: "já cadastrado" }
end

# "Hey #{object.name}, #{data[:value]} is already taken."
