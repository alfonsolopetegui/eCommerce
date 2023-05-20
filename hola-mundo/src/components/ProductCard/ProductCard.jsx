import './productCard.css'
import productImg from './nike.png'


export function ProductCard () {
    return (
        <article className="card-container">
                <div className="img-container">
                    <img src={productImg} alt="Imagen del producto" />
                </div>
                <div className="card-text-container">
                    <span className="card-price">U$s 500</span>
                    <span className="card-description">Acá va las descripción del producto</span>
                </div>
        </article>
    )
}