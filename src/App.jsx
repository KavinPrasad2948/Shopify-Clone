import { useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import Footer from './Components/Footer';


export default  function App() {
  const [cart, setCart] = useState([]);


  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter(item => item.name !== product.name);
    setCart(updatedCart);
    
  };
console.log(cart)
  return (
    <div>
      <Navbar count={cart.length} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductCard
              name="Mens Jacket"
              price=" 18"
              imageUrl="https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/sand_brown_solid_urban_shirt_for_men_base_15_11_2023_400x533.jpg"
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            <ProductCard
              name="Mens Green Tees"
              price="16"
              imageUrl="https://www.beyoung.in/api/cache/catalog/products/new_full_sleeves_14_10_2022/dusky_green_mock_neck_full_sleeves_t_shirt_base_03_11_2023_700x933.jpg"
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            <ProductCard
              name="Light Blue Floral A-Line Kurta"
              price="14"
              imageUrl="https://www.beyoung.in/api/cache/catalog/products/11_New_kurti_26_3_2022/light_blue_floral_a-line_kurta_base_28_06_2023_700x933.jpg"
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            <ProductCard
              name="Men full sleeve  Printed hooded"
              price="25"
              imageUrl="https://rukminim2.flixcart.com/image/832/832/ktketu80/sweatshirt/b/3/a/m-67029201-puma-original-imag6wygzhubhpzp.jpeg?q=70"
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            <ProductCard
              name="Solid Brown Men Sweatshirts"
              price="19"
              imageUrl="https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/solid_brown_men_sweatshirts_base_07_11_2023_700x933.jpg"
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            <ProductCard
              name="Navy Blue Sulphur twill Tshirt"
              price="12"
              imageUrl="https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/navy_blue_sulphur_twill_shirt_for_men_base_18_11_2023_700x933.jpg"
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            <ProductCard
              name="Navy Blue Women Plain T-Shirt"
              price="8"
              imageUrl="https://www.beyoung.in/api/cache/catalog/products/plain_new_update_images/navy_blue_womens_plain_t-shirt_women_base_700x933.jpg"
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            <ProductCard
              name="Block Print Straight Double Layer Kurti"
              price="40"
              imageUrl="https://assets.ajio.com/medias/sys_master/root/20230906/dpEC/64f882dbafa4cf41f5c12884/-473Wx593H-461191248-yellow-MODEL.jpg"
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

