import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector } from './userSlice';
//import { useHistory } from 'react-router-dom';
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
export function Login() {
  const dispatch = useAppDispatch();
  const nav=useNavigate();


  const { isFetching, isSuccess, isError, errorMessage } = useAppSelector(
    userSelector
  );

  interface Values {
    username: string;
    password: string;
  }
  return (
    <div className='bg-white h-full '>
      <div className='container flex-col bg-gray-200 h-96 w-3/12 '>

        <h1 className='font-bold mb-7 text-center' >sign in to your account</h1>

        <Formik
          initialValues={{
            username: '',
            password: '',

          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              dispatch(loginUser(values));
              if (isSuccess){
                nav("/home")
              }

              setSubmitting(false);
            }, 500);
          }}
        >
          <Form className='flex flex-col  space-y-6 '>


            <Field
              id="username"
              name="username"
              type="text"
              placeholder="username"
            />
            <Field id="password" name="password" placeholder="password" />
              <button type="submit" className='bg-blue-700 text-white w-full'>Sign in</button>
          </Form>
        </Formik>
      </div>
    </div>


  );

};
