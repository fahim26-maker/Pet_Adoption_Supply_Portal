[
  {
    "id": 1,
    "image": "https://i.postimg.cc/j5khcFsH/care-1.jpg",
    "name": "Aloe Vera Pet Shampoo",
    "category": "Pet Care",
    "price": "$14",
    "location": "Dhaka, Bangladesh",
    "buyUrl": "/buy/1"
  },
  {
    "id": 2,
    "image": "https://i.postimg.cc/RCWrmrnv/care-2.jpg",
    "name": "Natural Flea & Tick Spray",
    "category": "Pet Care",
    "price": "$18",
    "location": "Chittagong, Bangladesh",
    "buyUrl": "/buy/2"
  },
  {
    "id": 3,
    "image": "https://i.postimg.cc/9F9v4GbW/care-3.jpg",
    "name": "Gentle Pet Ear Cleaner",
    "category": "Pet Care",
    "price": "$10",
    "location": "Sylhet, Bangladesh",
    "buyUrl": "/buy/3"
  },
  {
    "id": 4,
    "image": "https://i.postimg.cc/JhrgdSLz/care-4.jpg",
    "name": "Hypoallergenic Pet Wipes",
    "category": "Pet Care",
    "price": "$8",
    "location": "Khulna, Bangladesh",
    "buyUrl": "/buy/4"
  },
  {
    "id": 5,
    "image": "https://i.postimg.cc/W3tysrtv/care-5.jpg",
    "name": "Dental Chews for Dogs",
    "category": "Pet Care",
    "price": "$12",
    "location": "Rajshahi, Bangladesh",
    "buyUrl": "/buy/5"
  },
  {
    "id": 6,
    "image": "https://i.postimg.cc/WpByPdvF/care-6.jpg",
    "name": "Soothing Paw Balm",
    "category": "Pet Care",
    "price": "$9",
    "location": "Barisal, Bangladesh",
    "buyUrl": "/buy/6"
  }
]
  <div className="px-4 py-6">
      <h1 className="text-3xl font-bold text-center my-8">🧼 Pet Care Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {data.map(car => <CareCards key={car._id} car={car}></CareCards>)}
      </div>
    </div>
      