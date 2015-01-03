class InvoiceController < ApplicationController
  def index
    @products = Product.all
  end

  private

  def products_temperory
    
  end
end
