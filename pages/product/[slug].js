import React from 'react'
import {IoMdHeartEmpty} from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { useDispatch } from "react-redux";
import {addToCart} from "@/store/cartSlice";

const ProductDetails = () => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const newItem = {
            name: 'Jordan Retro 6 G',
            detail: 'Men`s Golf Shoes',
            price: '$ 299.00',
            img: "/p1.png"
        }; // Пример нового элемента корзины
        dispatch(addToCart(newItem));
    };


    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0"><ProductDetailsCarousel/></div>

                    <div className="flex-[1] py-3">
                        <div className="text-[34px] font-semibold mb-2">
                            Jordan Retro 6 G
                        </div>
                        <div className="text-[34px] font-semibold mb-5">
                            Men&apos;s Golf Shoes
                        </div>
                        <div className="text-lg font-semibold">
                            MRP : $ 299.00
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20 ">
                            {`(Also includes all applicable duties)`}
                        </div>

                        <div className="mb-10 flex justify-between">
                            <div className="mb-2">
                                Select Size
                            </div>
                            <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                Select Guide
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                UK6
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                UK6.5
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                UK7
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                UK7.5
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                UK8
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                UK8.5
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                UK9
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                UK9.5
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                UK10
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                UK10.5
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                UK11
                            </div>
                        </div>

                        <div className="text-red-600 mt-1">
                            Size selection is required
                        </div>
                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-10"
                        onClick={()=> {
                            dispatch(handleAddToCart)
                        }
                        }
                        >Add to Cart
                        </button>

                        <button className="w-full py-4 rounded-full border  border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 mb-10 hover:opacity-75">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="text-md mb-5">
                                Feel unbeatable from the tee box to the final putt in a design in that's pure early MJ: speed, class and laden with true early '90s touches like visible Air and a translucent rubber sole that continue to stand the test of time. This model fuses the strut of 1st MJ's championship with some of our best golf technology, helping you make a statement of confidence when it comes time to tame the course.
                            </div>
                            <div className="text-md mb-5">
                                Feel unbeatable from the tee box to the final putt in a design in that's pure early MJ: speed, class and laden with true early '90s touches like visible Air and a translucent rubber sole that continue to stand the test of time. This model fuses the strut of 1st MJ's championship with some of our best golf technology, helping you make a statement of confidence when it comes time to tame the course.
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedProducts/>
            </Wrapper>
        </div>
    )
}
    export default ProductDetails
