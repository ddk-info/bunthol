class Invoice < ActiveRecord::Base
  # attr_accessor :name, :price, :alias_id
  has_many :products
  binding.pry
  def self.name

    name
  end
end
