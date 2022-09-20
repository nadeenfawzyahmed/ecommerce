import React, { useState ,useEffect,Fragment} from 'react';
import {  userSelector} from './userSlice';
import { useFormik } from 'formik';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    isFetching,
    isSuccess,
    isError,
    errorMessage,
    signupUser
  } from './userSlice';
import { Url } from 'url';

export function Signup() {
const dispatch = useAppDispatch();
const nav=useNavigate();

const { isFetching, isSuccess, isError, errorMessage } = useAppSelector(
    userSelector
  );
  const onSubmit = (data:any) => {
    dispatch(signupUser(data));
    console.log("usk")
  };
  //
  
interface Values {
    name: string;
    password: string;
    email: string;
  }
    return (
        <div className='bg-white h-full '>


        <div className='container flex-col bg-gray-200 h-96 w-3/12 '> 
        <h1 className='font-bold mb-7 text-center'>Signup</h1>
        <Formik
          initialValues={{
            name: '',
            password: '',
            email: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              dispatch(signupUser(values));
              if (isSuccess){
                nav("/login")
              }


              setSubmitting(false);
            }, 500);
          }}
        >
          <Form className='flex flex-col  space-y-6 '>

            <Field id="name" name="name" placeholder="Full Name"  />
            

           
            <Field
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Field id="password" name="password" placeholder="Password" />
            <Field id="confirmpassword" name="confirmpassword" placeholder="confirm password" />

  
            <button type='submit' className='bg-green-400 text-white'>Create Account</button>
            
            

          </Form>
        </Formik>
      </div>
      
      </div>

    );
};
export default Signup;
