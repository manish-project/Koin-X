import React from "react";

function AboutSection() {
  return (
    <div className="bg-white ml-10 mt-10 mb-10 w-full">
      <div className="">
        <div className="pl-5">
          <h1 className="p-5 text-3xl font-bold">About Bitcoin</h1>
          <h5 className="px-5 pb-2 text-xl font-bold">What is Bitcoin?</h5>
          <p className="px-5 text-xl font-semibold pb-10 leading-relaxed">
            Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to
            act as money and a form of payment outside the control of any one
            person, group, or entity, thus removing the need for third-party
            involvement in financial transactions. It is rewarded to blockchain
            miners for verifying transactions and can be purchased on several
            exchanges.Websites such as CoinMarketCap, CoinGecko, and CoinDesk
            offer comprehensive data on Bitcoin, including its current price,
            market capitalization, trading volume, historical data, and news
            updates.
          </p>
        </div>
        <hr className=" ml-10 h-0.5 bg-slate-300" />
        <div className="pl-10 mb-8">
          <h1 className=" py-5 pb-3 text-xl font-bold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-xl font-medium pb-7 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus voluptate corrupti cum ex aliquam, reprehenderit vel
            quasi error id nemo assumenda facere quas ab dignissimos
            accusantium. Minima aperiam consectetur nisi. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Laborum, et? Lorem ipsum dolor
            sit amet consectetur adipisicing.
          </p>
          <p className="text-xl font-medium pb-7 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            maiores, ratione, nihil error assumenda recusandae animi perferendis
            molestiae, distinctio quia adipisci! In, atque! Aspernatur veritatis
            provident nesciunt numquam vitae ab ipsum molestiae eaque, ad
            labore, nam porro voluptate! Magnam, deserunt id consectetur
            distinctio in repellat ipsum nihil atque harum nesciunt.
          </p>
          <p className="text-xl font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            dignissimos est ipsa natus dolor laudantium magnam sequi quia omnis
            nam optio dolore, excepturi repellat minus, inventore culpa, iure at
            ab!
          </p>
        </div>
        <hr className=" ml-10 h-0.5 bg-slate-300" />
        <div className="m-10">
          <h1 className="text-3xl font-bold pb-8">Already Holding Bitcoin?</h1>
          <div className="lg:flex lg:m-15 m-10 lg:gap-12 gap-8">
            <div className="lg:w-1/2 w-full flex  justify-center gap-5 bg-gradient-to-r from-teal-500 via-blue-400 to-blue-500 rounded-lg h p-10 mb-10">
              <img
                src="assets/images/phone1.jpg"
                alt="phone"
                className="lg:w-[200px] md:w-[150px] w-[50px] rounded-lg overflow-hidden"
              />
              <div className="lg:ml-8 ">
                <h1 className="mb-8 text-2xl font-bold text-white">
                  Calculate your profit
                </h1>
                <button className="bg-white text-lg font-semibold px-5 py-3 rounded-lg">
                  Check Now→
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full  flex justify-center items-center gap-5 bg-gradient-to-r from-rose-500 via-red-400 via-red-600 to-red-700 rounded-lg p-10 ">
              <div className="f">
                <img
                  src="assets/images/phone2.jpg"
                  alt="phone2"
                  className="rounded-lg lg:w-[200px] md:w-[150px] w-[50px]"
                />
              </div>
              <div className="ml-8">
                <h1 className="mb-8 text-2xl font-bold text-white">
                  Claculate your tax liability
                </h1>
                <button className="bg-white text-lg font-semibold px-5 py-3 rounded-lg">
                  Check Now→
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className=" ml-10 h-0.5 bg-slate-300" />
        <div className=" text-lg font-semibold ml-10 mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          neque, tenetur expedita quos tempore rem maxime enim doloribus culpa
          nam dolorum ullam animi, at nulla praesentium, suscipit alias vitae in
          sit quibusdam voluptates distinctio! Provident repellendus nostrum
          maxime pariatur error. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Temporibus exercitationem soluta repudiandae odit
          debitis reprehenderit eum minus animi aliquid sed.
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
