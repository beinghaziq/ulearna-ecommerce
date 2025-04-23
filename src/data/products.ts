export const products = {
    featured: {
      id: '1',
      name: 'Premium Comfort Sneakers',
      price: 129.99,
      images: [
        'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop',
      ],
      colors: [
        { id: 'black', name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        { id: 'blue', name: 'Blue', class: 'bg-blue-500', selectedClass: 'ring-blue-500' },
        { id: 'white', name: 'White', class: 'bg-white', selectedClass: 'ring-gray-200' },
      ],
      sizes: [
        { id: 'us-7', name: 'US 7', inStock: true },
        { id: 'us-8', name: 'US 8', inStock: true },
        { id: 'us-9', name: 'US 9', inStock: false },
        { id: 'us-10', name: 'US 10', inStock: true },
      ],
      description: 'These premium sneakers combine comfort and style with our innovative cushioning technology. Perfect for all-day wear with breathable materials that keep your feet fresh.',
      highlights: [
        'Lightweight, breathable mesh upper',
        'Comfortable memory foam insole',
        'Durable rubber outsole',
        'Available in multiple colors'
      ],
      details: 'The sneakers feature a flexible sole that adapts to your foot movement, providing superior comfort. The upper is made from recycled materials, making them an eco-friendly choice.'
    }
  };
  