import { Link } from 'react-router-dom'
import Chart from '../../Chart/Chart'
import './Product.css'
import { productData } from '../../../dummyData'
import { Publish } from '@mui/icons-material'


export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/newProduct'>
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">

                <div className="productTopLeft">
<Chart data={productData} title="Sales Performance" dataKey="Sales"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1600375226700-5ce19fbe1a6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="productBottom">
<form className="productForm">
    <div className="productFormLeft">
<label>Product Name</label>
<input type='text' placeholder='Apple Airpod'/>
<label>In Stock</label>
<select name='instock' id='instock'>
    <option value="yes">Yes</option>
    <option value='no'>No</option>
</select>
<label>Active</label>
<select name='active' id='active'>
    <option value="yes">Yes</option>
    <option value='no'>No</option>
</select>
    </div>
    <div className="productFormRight">

        <div className="productUpload">
            <img src="https://images.unsplash.com/photo-1585565804112-f201f68c48b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="productUploadImg" />
            <label for='file' >
                <Publish/>
            </label>
               <input type='file' id='file' style={{display:'none'}}/>
            
        </div>
        <button className="productButton">Update</button>
    </div>
</form>

            </div>
        </div>
    )
}
