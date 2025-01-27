import './Tesst1.css';

function Test1(props) {
 
    const { product } = props;

 

    return (
        <div>
            <div className="card">
                <img src={product.image} />
                <h2>{product.name}</h2>
                <h2>{product.brand}</h2>
                <h2>{product.price}</h2>
            </div>
        </div>
    );
}

export default Test1;
