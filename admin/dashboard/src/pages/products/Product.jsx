import "./product.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";

import PublishIcon from "@mui/icons-material/Publish";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../utilities/requestMethods";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [salesProduct, setSalesProduct] = useState([]);
  // console.log(productId);

  const product = useSelector((state) =>
    state.product.products.data.find((item) => item._id === productId)
  );
  // console.log(product);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getProductSalesStats = async () => {
      try {
        const res = await userRequest.get(`/orders/income?pid=${productId}`);
        const list = res.data.data.sort((a, b) => {
          return a._id - b._id;
        });
        // console.log(res.data.data);
        list.map((item) => {
          setSalesProduct((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              Sales: item.total,
            },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getProductSalesStats();
  }, [MONTHS, productId]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddBtn">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={salesProduct}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">inStock</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product Desc</label>
            <input type="text" placeholder={product.desc} />
            <label>Product Price</label>
            <input type="text" placeholder={product.price} />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
