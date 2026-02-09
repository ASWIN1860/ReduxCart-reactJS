import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { useDispatch } from 'react-redux'

function Details() {
  const dispatch=useDispatch({})
  const [productObj,setProductObj]=useState({})
  const {id}=useParams()
  console.log(id)

  useEffect(()=>{
      getData()
  },[])

  // const { products, pending, error } = useSelector(
  //     (state) => state.productReducer,
  //   );
  

  const getData=()=>{
    const products=localStorage.getItem('products')
    const productData=JSON.parse(products).find(item=>item.id==id)
    console.log(productData)
    setProductObj(productData)
    
  }  
  return (
    <>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={productObj?.thumbnail} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">ID: {productObj.id}</div>
                        <h1 className="display-5 fw-bolder">{productObj.title}</h1>
                        <h4>{productObj?.category}</h4>
                        <h4 style={{fontStyle:'italic'}}>{productObj?.brand}</h4>
                        <div className="fs-5 mb-5">
                            <span>{productObj?.price}</span>
                        </div>
                        <p className="lead">
                         {productObj?.description}
                        </p>
                        <div className="d-flex justify-content-between">
                            <button className="btn" onClick={()=>{dispatch(addToWishlist(productObj))}}>
                              <i class="fa-solid fa-heart-circle-plus " style={{color:'#f00f31',fontSize:'30px'}}></i>
                            </button>
                            <button className="btn">
                              <i class="fa-solid fa-cart-plus " style={{color:'#0a5ef0',fontSize:'30px'}}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Details