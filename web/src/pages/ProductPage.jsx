import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import styled from 'styled-components';
import { getImageUrl } from '../utils/imageUtils';
import { useCart } from '../contexts/CartContext';
import { useStock } from '../contexts/StockContext'


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ImgContainer = styled.img`
  width: 50%;
  height: 50vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const RemoveIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  background-color: lightgray;
  border-radius: 5px;
  margin-right: 10px;
  user-select: none;
`;

const AddIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  background-color: lightgray;
  border-radius: 5px;
  margin-left: 10px;
  user-select: none;
`;
const Amount = styled.span`
  font-size: 24px;
  margin: 0 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid ${(props) => (props.isOutOfStock ? 'darkred' : 'green')};
  background-color: ${(props) => (props.isOutOfStock ? 'red' : 'green')};
  color: white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${(props) => (props.isOutOfStock ? 'darkred' : 'darkgreen')};
  }
    &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { getStockById, updateStock } = useStock();


  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);

    if (foundProduct) {
      const loadImage = async () => {
        try {
          const image = await getImageUrl(foundProduct.category, foundProduct.image);
          setImageUrl(image);
        } catch (err) {
          console.error('Error loading image:', err);
        }
      };
      loadImage();
    }
  }, [id]);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    const stockAvailable = getStockById(product.id);
    if (newQuantity >= 1 && newQuantity <= stockAvailable) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      if (quantity <= getStockById(product.id)) {
        addToCart(product, quantity);
        updateStock(product.id, -quantity);
      } else {
        alert('Inte tillräckligt med lager!');
      }
    }
  };


  if (!product) {
    return <div>Loading...</div>;
  }
  const isOutOfStock = getStockById(product.id) === 0;

  return (
    <Container>
      <Wrapper>
        <ImgContainer src={imageUrl} alt={product.name} />
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.description}</Desc>
          <Price>${product.price}</Price>
          <p>Stock:{getStockById(product.id)}</p>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleQuantityChange(-1)}>-</RemoveIcon>
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantityChange(1)}>+</AddIcon>
            </AmountContainer>
            <Button 
            onClick={handleAddToCart}  
            disabled={isOutOfStock} 
            outOfStock={isOutOfStock}
            >
               {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
              </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
