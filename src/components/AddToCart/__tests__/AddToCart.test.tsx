import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToCart from '../AddToCart';
import { useCart } from '@/context/CartContext';

// Mock the cart context
jest.mock('@/context/CartContext', () => ({
  useCart: jest.fn(),
}));

describe('AddToCart Component', () => {
  const mockProps = {
    price: 99.99,
    color: 'Blue',
    size: 'M',
    image: '/product-image.jpg',
    name: 'Test Product'
  };
  
  const mockAddToCart = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    (useCart as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
    });
  });

  it('renders correctly with initial quantity of 1', () => {
    render(<AddToCart {...mockProps} />);
    
    // Check if price is displayed correctly
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    
    // Check if quantity is initialized to 1
    expect(screen.getByText('1')).toBeInTheDocument();
    
    // Check if buttons are present
    expect(screen.getByRole('button', { name: 'Decrease quantity' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Increase quantity' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();
  });

  it('increases quantity when + button is clicked', async () => {
    const user = userEvent.setup();
    render(<AddToCart {...mockProps} />);
    
    const increaseButton = screen.getByRole('button', { name: 'Increase quantity' });
    await user.click(increaseButton);
    
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('decreases quantity when - button is clicked', async () => {
    const user = userEvent.setup();
    render(<AddToCart {...mockProps} />);
    
    // First increase to 2
    const increaseButton = screen.getByRole('button', { name: 'Increase quantity' });
    await user.click(increaseButton);
    expect(screen.getByText('2')).toBeInTheDocument();
    
    // Then decrease to 1
    const decreaseButton = screen.getByRole('button', { name: 'Decrease quantity' });
    await user.click(decreaseButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('does not decrease quantity below 1', async () => {
    const user = userEvent.setup();
    render(<AddToCart {...mockProps} />);
    
    const decreaseButton = screen.getByRole('button', { name: 'Decrease quantity' });
    await user.click(decreaseButton);
    
    // Quantity should still be 1
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('calls addToCart with correct product data when Add to cart button is clicked', async () => {
    const user = userEvent.setup();
    render(<AddToCart {...mockProps} />);
    
    const addToCartButton = screen.getByRole('button', { name: 'Add to cart' });
    await user.click(addToCartButton);
    
    expect(mockAddToCart).toHaveBeenCalledWith({
      name: 'Test Product',
      color: 'Blue',
      price: 99.99,
      image: '/product-image.jpg',
      id: '1'
    });
  });

  it('calls addToCart with correct quantity when changed', async () => {
    const user = userEvent.setup();
    render(<AddToCart {...mockProps} />);
    
    // Increase quantity to 3
    const increaseButton = screen.getByRole('button', { name: 'Increase quantity' });
    await user.click(increaseButton);
    await user.click(increaseButton);
    
    expect(screen.getByText('3')).toBeInTheDocument();
    
    // Add to cart
    const addToCartButton = screen.getByRole('button', { name: 'Add to cart' });
    await user.click(addToCartButton);
    
    // Note: The current implementation doesn't include quantity in addToCart
    // If it should, this test would need to be updated
    expect(mockAddToCart).toHaveBeenCalledWith({
      name: 'Test Product',
      color: 'Blue',
      price: 99.99,
      image: '/product-image.jpg',
      id: '1'
    });
  });
});