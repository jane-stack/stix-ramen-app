class CreateMenus < ActiveRecord::Migration[7.0]
  def change
    create_table :menus do |t|
      t.string :image
      t.string :name
      t.decimal :price

      t.timestamps
    end
  end
end
