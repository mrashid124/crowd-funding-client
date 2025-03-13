import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from "../assets/error404.jpg"
const ErrorPage = () => {
    return (
        <div className="text-center">
        <Link to={"/"}>
          <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto min-h-[calc(100vh-264px)]">
            <img src={errorImg} alt="" />
          </div>
        </Link>
  
      </div>
    );
};

export default ErrorPage;