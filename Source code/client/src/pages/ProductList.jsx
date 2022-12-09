import { Card, Pagination } from "@windmill/react-ui";
import Product from "components/Product";
import Spinner from "components/Spinner";
import { useProduct } from "context/ProductContext";
import Layout from "layout/Layout";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ProductList = () => {
  const { products, setPage } = useProduct();

  const handleChange = (page) => {
    setPage(page);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  if (!products) {
    return (
      <>
        <Layout>
          <Spinner size={100} loading />
        </Layout>
      </>
    );
  }

  return (
    <Layout>
      <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
          disableDotsControls="false"
          disableSlideInfo="false"
          disableButtonsControls="false"
          infinite="true"
        >
          <img
            className="home__image" alt="img"
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/apub/Elsewhere/Elsewhere_GW_DesktopHero_3000x1200._CB405350248_.jpg"
          />
          <img alt="img"
            src="https://www.admitkard.com/blog-editor/wp-content/uploads/2018/01/Illinois-Institute-of-Technology-Chicago-Reviews-Ratings-Application-Fees.jpg"
            className="home__image"
          />
          <img alt="img"
            src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/dash/trafficdrivers/Q4_2020_HolidayDash_TrafficDrivers_Desktop_Hero_V1B_3000x1200._CB405378406_.jpg"
            className="home__image"
          />
          <img alt="img"
            src="https://www.iit.edu/sites/default/files/2020-06/elexon_tube_2400x1200.jpg"
            className="home__image"
          />
        </AliceCarousel>
        <Card className="flex flex-wrap card-background">
          {products?.map((prod) => (
            <div
              className="w-full flex flex-col justify-between sm:w-1/2 md:w-1/3 lg:w-1/4 my-2 px-2 box-border"
              key={prod.product_id}
            >
              <Product product={prod} />
            </div>
          ))}
        </Card>
        <Pagination
          totalResults={20}
          resultsPerPage={12}
          onChange={handleChange}
          label="Page navigation"
        />
      
    </Layout>
   
  );
};

export default ProductList;
