import React from 'react';

const Carousel = () => {


  return (
    <div >
      <div class="carousel w-full h-[650px] pt-22 bg-green-500">
        <div id="item1" class="carousel-item w-full">
          <img alt=" " src="https://i.ibb.co/3kcTtW4/woman-standing-rock-atuh-beach-nusa-penida-island-bali-indonesia.jpg" class="w-full" />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img  alt=" "  src="https://i.ibb.co/r7xy25j/sunset-pool.jpg" class="w-full" />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img  alt=" "   src="https://i.ibb.co/2yprx7m/side-view-traveling-woman-taking-photograph.jpg " class="w-full" />
        </div>
       

        
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">1</a>
        <a href="#item2" class="btn btn-xs">2</a>
        <a href="#item3" class="btn btn-xs">3</a>
      </div>
    </div>
  );
};

export default Carousel;