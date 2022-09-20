import React, { useState, useEffect, Fragment } from 'react';
import { useFormik } from 'formik';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {

    product, fetchById
} from './productSlice';
import {
    AiOutlineShoppingCart
} from "react-icons/ai";

import { clearCart, removeItem, increase, decrease, calculateTotals, addItem, cartItems } from '../Cart/CartSlice';

export function ProductDetails() {
    const { id} = useParams() as any

    const item = useAppSelector(product);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchById(id))


    }, []);
    return (
        <div>   <Link to={"/cart"}>

            <button className='bg-amber-400 rounded text-white flex justify-between  top-0 right-0  '  >
                < AiOutlineShoppingCart size={30} className='mr-4 ' />

                Go to your bag

            </button>
        </Link>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">

                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={item.image} alt="" width="384" height="512">
                </img>

                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote className="text-amber-500 dark:text-amber-400">
                        <p className="text-large font-medium">
                            {item.category}
                        </p>
                    </blockquote>
                    <blockquote>
                        <p className="text-large font-medium">
                            {item.title}
                        </p>
                    </blockquote>
                    <blockquote>
                        <p className="text-sm font-small">
                            {item.description}
                        </p>
                    </blockquote>

                    <figcaption className="font-medium">
                        <div className="text-amber-400 dark:text-amber-400">
                            {item.price}
                        </div>

                    </figcaption>


                    <div className='justify-between'>


                        <button className='bg-amber-400 rounded text-white flex justify-between ' onClick={() => dispatch(addItem(item))} >
                            < AiOutlineShoppingCart size={30} className='mr-4 ' />

                            Add to cart

                        </button>

                    </div>


                </div>
            </figure>
        </div>




    )


}
