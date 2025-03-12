import React from "react";

const Hero = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-5 text-white">
      <div className="p-6 rounded-lg bg-[url('/bg-1.png')] bg-cover bg-no-repeat">
        <h1 className="text-3xl font-semibold">
          Araç Kiralama İçin <br /> En İyi Platform
        </h1>

        <p className="my-3">Güvenilir bir şekilde araç kiralamanın kolaylığı, ayrıca daha uygun fiyatlara !</p>

        <button className="bg-basic-blue py-2 px-3 rounded-md hover:brightness-90 transition text-white">
          Araç Kirala
        </button>

        <div className="flex justify-center">
          <img src="/car-1.png" alt="" />
        </div>
      </div>

      <div className="p-6 rounded-lg bg-[url('/bg-2.png')] bg-cover bg-no-repeat max-lg:hidden">
        <h1 className="text-3xl font-semibold">
          Düşük Fiyata <br /> Araba Kirala
        </h1>

        <p className="my-3">Ucuz araç kiralama hizmetleri ile güvenli ve konforlu hizmeti ayağınıza getirdik</p>

        <button className="bg-[#54A6FF] py-2 px-3 rounded-md hover:brightness-90 transition text-white">
          Araç Kirala
        </button>

        <div className="flex justify-center">
          <img src="/car-2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
