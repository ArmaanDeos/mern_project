import "./productlist.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../redux/apiCalls";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  // console.log(products.data);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    alert("Delete this Product...");
    deleteProducts(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListData">
            <img className="productListDataImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    { field: "price", headerName: "Price", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row._id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products.data}
        getRowId={(row) => row._id}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
