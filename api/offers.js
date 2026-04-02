export default function handler(req, res) {
  res.status(200).json([
    {
      title: "BMW M3 Competition",
      price: "49 900 zł",
      oldPrice: "55 000 zł",
      mileage: "180 000 km",
      gearbox: "Automat",
      fuel: "Benzyna",
      location: "Katowice",
      time: "2 min temu",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
      link: "https://www.otomoto.pl"
    },
    {
      title: "Audi A4 Avant",
      price: "5 500 €",
      mileage: "220 000 km",
      gearbox: "Manual",
      fuel: "Diesel",
      location: "Berlin",
      time: "1h temu",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400",
      link: "https://www.mobile.de"
    }
  ]);
}
