
const Garage = () => {
    const cars = [
      { name: "Nissan Silvia S15", image: "../../assets/106.webp",},

      { name: "Toyota Supra MK4", image: "/supra.jpg" },
    ];
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Garage</h2>
        <div className="grid grid-cols-2 gap-4">
          {cars.map((car, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img src={car.image} className="w-full h-32 object-cover rounded" alt={car.name} />
              <h3 className="mt-2 text-center">{car.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Garage;
  