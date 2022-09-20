
import React, { useState, useEffect, Fragment } from 'react';
import { useFormik } from 'formik';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  products
  , fetchProducts, product, fetchById
} from './productSlice';
import { clearCart,removeItem,  increase, decrease, calculateTotals ,addItem} from '../Cart/CartSlice'; 
import {
  AiOutlineShoppingCart
}from "react-icons/ai";
export function Productlist() {
  const items = useAppSelector(products);
  const item = useAppSelector(product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
    console.log("yes", products);
  }, []);

  return (
    <div>
 <button className='bg-amber-400 rounded text-white  absolute top-0 right-0 mb-4 ' >
                        < AiOutlineShoppingCart size={30} className='mr-4 ' />

                        

                        </button>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        

        {items.map((el: any) => (
          <Link to={ "/details/"+el.id}>

          <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-24 md:h-auto md:rounded-none rounded-full mx-auto" src={el.image} alt="" width="200" height="100">
            </img>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-sm font-small">
                  {el.title}
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-amber-500 dark:text-amber-400">
                  {el.price}
                </div>

              </figcaption>
            </div>
          </figure>
          </Link>


        ))}


      </div>
    </div>

  )
}
