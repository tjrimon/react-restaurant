import React from 'react';

const HomeBanner = () => {
    return (
        <div className='h-[700px] bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/566L6Kb/bannerbackground.png")] flex items-center justify-center' >
            <div>
                <h3 className='text-center text-5xl font-semibold mb-8'>Best food waiting for your belly</h3>
                <div className='flex justify-center'>
                    <input className='w-[350px] h-[50px] rounded-l-full shadow outline-none font-thin text-lg px-4' placeholder='Search food items' type="search" name="" id="" />
                    <button className='h-[50px] w-[100px] bg-red-600 rounded-r-full text-lg font-thin shadow text-white'>Search</button>
                </div>
            </div>
        </div >
    );
};

export default HomeBanner;