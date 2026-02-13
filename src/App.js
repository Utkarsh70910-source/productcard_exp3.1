function App() {
  const products = [
    {
      name: "Wireless Headphones",
      price: "$129.99",
      stock: true,
    },
    {
      name: "Mechanical Keyboard",
      price: "$89.99",
      stock: false,
    },
    {
      name: "Smart Watch",
      price: "$199.99",
      stock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 w-72"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>

            <h2 className="text-xl font-semibold mb-2">
              {product.name}
            </h2>

            <p className="text-lg font-bold mb-3">
              {product.price}
            </p>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.stock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.stock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
