import { useState } from "react";
import "./newproduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase/firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [files, setFiles] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  // console.log(inputs);

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  // console.log(cat);

  const handleClick = (e) => {
    e.preventDefault();
    const uniquesFilesName = new Date().getTime() + files.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, uniquesFilesName);
    const uploadTask = uploadBytesResumable(storageRef, files);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log(error);
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
          // console.log(product);
          // console.log("File available at", downloadURL);
        });
      }
    );
  };
  // console.log(files);
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label> Image</label>
          <input
            type="file"
            name="file"
            id="file"
            className="fileInput"
            onChange={(e) => setFiles(e.target.files[0])}
          />
        </div>
        <div className="newProductItem">
          <label> Title</label>
          <input
            name="title"
            type="text"
            placeholder="Product Title"
            onChange={handleChange}
          />
        </div>
        <div className="newProductItem">
          <label> Price</label>
          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
          />
        </div>
        <div className="newProductItem">
          <label> Description</label>
          <input
            name="desc"
            type="text"
            placeholder="Product Description"
            onChange={handleChange}
          />
        </div>
        <div className="newProductItem">
          <label> Categories</label>
          <input
            type="text"
            placeholder="jeans,skirts etc..."
            onChange={handleCat}
          />
        </div>

        <div className="newProductItem">
          <label>Size</label>
          <select
            name="size"
            id="active"
            className="newProductSelect"
            onChange={handleChange}
          >
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
            <option value="xxxl">XXXL</option>
          </select>
        </div>

        <div className="newProductItem">
          <label>InStock</label>
          <select
            name="inStock"
            id="active"
            className="newProductSelect"
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="newProductBtn" onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
