import './index.css'

const Product = props => {
    const {productData} = props
    const {imageUrl, name, by, description, price } = productData

    return(
        <li className='product-container'>
            <img src={imageUrl} alt={name} className="product-image" />
            <div className='product-description'>
                <h1 className='product-name'>{name}</h1>
                <p className='product-maker'>By <span className='product-maker-name'>{by}</span></p>
                <p className='description'>{description}<span className='read-more'>Read more</span></p>
                <div>
                    <img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658242631/Group_11990_khh4ku.png" alt="star" className='star' />
                    <img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658242631/Group_11990_khh4ku.png" alt="star" className='star' />
                    <img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658242631/Group_11990_khh4ku.png" alt="star" className='star' />
                    <img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658242631/Group_11990_khh4ku.png" alt="star" className='star' />
                    <img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658242631/Group_11990_khh4ku.png" alt="star" className='star' />
                </div>
                <div className='price-like-coment-container'>
                    <p className='price-text'><span className='price'>${price}</span> USD</p>
                    <div className='like-coment-container'><img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658242921/Group_11995_mdk1jx.png" alt="like" className='like' />< img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658242914/Group_1_anacfa.png" alt="comment" className='comment' /></div>
                </div>
            </div>
        </li>
    )
}

export default Product