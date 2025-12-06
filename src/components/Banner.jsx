
import React from 'react';
import dog from "../assets/dog-puppy-on-garden-royalty-free-image-1586966191.avif"
import adopt from "../assets/img-requirements-to-adopt-a-pet.jpg"
import owner from "../assets/Dog-Owner-Happy-Breath.jpg"



const Banner = () => {
  
    return (
        <div>
            <h1 className='text-center text-4xl text-orange-400 font-bold mt-2'>Welcome to Pet Haven</h1>
          <div class="slider">
    <div className="slides">
      <div className="slide">
        <img src={dog} alt="Cute puppy" />
        <div className="caption">Find your forever friend 🐶</div>
      </div>
      <div className="slide">
        <img src={adopt} alt="Adoption moment" />
        <div className="caption">Adoption day: a new beginning ❤️</div>
      </div>
      <div className="slide">
        <img src={owner} alt="Happy owner" />
        <div className="caption">Smiles that say it all 🐾</div>
      </div>
    </div>
    <button className="nav prev" id="prev">❮</button>
    <button className="nav next" id="next">❯</button>
  </div>

        </div>
    );
};

export default Banner;