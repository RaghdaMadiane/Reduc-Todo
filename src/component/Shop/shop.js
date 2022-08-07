import { useEffect, useState } from "react";
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
function Shop() {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = () => {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
    }
    return (
        <div class="row">
           
            {products.map(product => {
                
                return (
                    <Link to={`/shop/${product.id}`} className="col-4 mb-3">
                        <Card key={product.id} className=" container d-flex flex-wrap justify-content-center " style={{ textAlign: 'center' }}>
                            <Card.Body >

                                <Card.Title>
                                    <img src={product.image} className="w-25" />
                                </Card.Title>

                                <Card.Text>
                                    {product.title}
                                </Card.Text>
                                <Card.Link >{product.price}</Card.Link>
                                <Card.Link >{product.rating.rate}</Card.Link>

                            </Card.Body>
                        </Card>
                    </Link>
                )
            })}
        </div>
    )
}
export default Shop;