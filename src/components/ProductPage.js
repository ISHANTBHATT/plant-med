import React,{ useEffect, useRef, useState } from 'react'
import { useStateValue } from "../context/StateProvider";
import { categories } from '../utils/data';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { actionType } from "../context/reducer";
// import SelectButton from './SelectButton';


function ProductPage(props) {
    const [{ foodItems, cartItems}, dispatch] = useStateValue();
    const rowContainer = useRef();
    const [items, setItems] = useState([]);
    let {id} = useParams();
    let {title} = useParams();
    const product=foodItems?.filter((n) => n.title == title);
    // let [selected, setSelcted]= useState(false);
    // let [displayImg, setDisplayImg]= useState();
    console.log("product showing",product[0].imageURL);

    const addtocart = () => {
      dispatch({
        type: actionType.SET_CARTITEMS,
        cartItems: items,
      });
      localStorage.setItem("cartItems", JSON.stringify(product));
    };

    // useEffect(() => {
    //     rowContainer.current.scrollLeft += scrollValue;
    //   }, [scrollValue]);
    
      useEffect(() => {
        addtocart();
      }, [items]);

    return (
    //     <div>
    //     <div className="ProductPage">
            
    //         <div className="ProductPage__left">

    //             <div className="left__right">
    //                 <img className="w-full h-full object-contain" src={product[0]?.imageURL}/>
    //             </div>
                
    //         </div>

    //         <div className="ProductPage__right">

    //         <div className="w-full flex items-center justify-between">
    //           <motion.div
    //             whileTap={{ scale: 0.75 }}
    //             className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
    //             onClick={() => setItems([...cartItems, product[0]])}
    //           >
    //             <MdShoppingBasket className="text-white" />
    //           </motion.div>
    //         </div>

    //         <div className="w-full flex flex-col items-end justify-end -mt-8">
    //           <p className="text-textColor font-semibold text-base md:text-lg">
    //             {product[0]?.title}
    //           </p>
    //           {/* <p className="mt-1 text-sm text-gray-500">
    //             {product[0]?.calories} Calories
    //           </p> */}
    //           <div className="flex items-center gap-8">
    //             <p className="text-lg text-headingColor font-semibold">
    //               <span className="text-sm text-red-500">₹</span> {product[0]?.price}
    //             </p>
    //           </div>
    //         </div>


            
    //             {/* <div className="right__AddtoCart">
    //             <motion.div
    //             whileTap={{ scale: 0.75 }}
    //             className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
    //             onClick={() => setItems([...cartItems, product[0]])}
    //           >
    //             <MdShoppingBasket className="text-white" />
    //           </motion.div>
    //             </div> */}

    //             <div className="right__details">

    //             <div className="right__shipment">
    //                 <p>Free Delhi Shipping $100+</p>
    //             </div>

    //             </div>
                
    //         </div>
            
            
    //     </div>

    // </div>
    <div
      ref={rowContainer}
      className="w-full flex items-center gap-3  my-12 scroll-smooth"
    >
          <div
            key={product[0]?.id}
            className="w-[400px] h-[500px] min-w-[275px] md:w-300 md:min-w-[1400px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-row items-center justify-evenly relative"
          >
            <div className="w-full flex items-center">

              <motion.div
                className="w-[500px] h-[500px] -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={product[0]?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                onClick={() => setItems([...cartItems, product[0]])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full h-full flex flex-col  justify-start mt-[100px]">
              <p className="text-textColor font-semibold text-base md:text-lg mb-[40px]">
                {product[0]?.title} - 500 Gm Pack
              </p>
              {/* <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p> */}
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">₹</span> {product[0]?.price}
                </p>
              </div>
              
                <div className="right__details">
                 <div className="right__shipment">
                    <ul className='list-disc'>
                        <li>Containt :- {product[0]?.title} 50% WP</li>
                        <li>Control diseases like Scab, Brown rot, Damping off, Downy Mildew, Fruit rot, Clump rot, various Leaf -spots</li>
                        <li>500 Gm Pack</li>
                    </ul>
                </div>
             </div>
            </div>
          </div>
    </div>
    )
}

export default ProductPage
