import Nav from "components/Nav";
import Spinner from "components/Spinner";
import React from "react";
import { Helmet } from "react-helmet-async";


const Layout = ({ children, title, loading }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || "Home"} | IIT Store </title>
        <meta
          name="description"
          content="Ecommerce store built with React, Node, Express and Postgres"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        
        <style type="text/css">{`
        html,body{
          height: 100%;
        }
    `}</style>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Nav />
        {loading ? (
          <>
            <Spinner size={100} loading />
          </>
        ) : (
          <div className="text-gray-700 mx-auto px-2 lg:px-56 flex-grow h-full w-full">
            <main className="h-full">{children}</main>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
