import React, { useState ,useEffect,Fragment} from 'react';
import { useForm } from 'react-hook-form';
import {  userSelector} from './userSlice';
import { useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';



import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    isFetching,
    isSuccess,
    isError,
    errorMessage,
    signupUser
  } from './userSlice';

export function Signup() {
const dispatch = useAppDispatch();

const { isFetching, isSuccess, isError, errorMessage } = useAppSelector(
    userSelector
  );
  const onSubmit = (data:any) => {
    dispatch(signupUser(data));
    console.log("usk")
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      id:'',
      fullname:'',
      firstname:'',
      lastname:'',
      password:'',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      //dispatch(signupUser(values))

    },
  });

    return (

        <form onSubmit={formik.handleSubmit}>
    <label htmlFor="id">ID</label>
    <input
      id="id"
      name="id"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.id}
    />
  <label htmlFor="firstName">First Name</label>
    <input
      id="firstName"
      name="firstName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.firstName}
    />
    <label htmlFor="lastName">Last Name</label>
    <input
      id="lastName"
      name="lastName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.lastName}
    />
    <label htmlFor="email">Email</label>
    <input
      id="email"
      name="email"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.email}
    />

    <button type="submit">Submit</button>
   
  </form>
    );
};
export default Signup;
