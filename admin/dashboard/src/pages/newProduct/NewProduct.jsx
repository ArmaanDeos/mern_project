import "./newproduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label> Image</label>
          <input type="file" name="file" id="file" className="fileInput" />
        </div>
        <div className="newProductItem">
          <label> Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="newProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="newProductItem">
          <label>Active</label>
          <select name="active" id="active" className="newProductSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProductBtn">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
