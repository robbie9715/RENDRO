import React from "react";
import {
  Card,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useState } from "react";
import tabsData from "@/data/gallery";
import chart_data from "@/data/chart-data";
import ChartBox from "@/widgets/cards/chart-box";
import {AiFillHeart} from "react-icons/ai"
import Product_card from "@/widgets/cards/product-card";
import Product_data from "@/data/product-data";
import design from "../../public/img/maindesignpack.svg"
export function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div className="w-full h-[768px]">
      <section className=" bg-gray-50 px-4 pb-20 pt-4  grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col w-full px-4 justify-center items-center ">
          <div className="flex flex-col items-center">
            <Card color="transparent" shadow={false} className="text-center">
              <img src={design} alt="..."/>
              <Typography variant="h3" color="black" className="my-2">
              Design Packages
              </Typography>
              <div className="w-full p-4">
                <div className="flex flex-row justify-between ml-16"> 
                  <div className="flex gap-3">
                    <button><p className=" text-xs font-normal  text-black"> Reply </p></button>
                    <button><p className=" text-xs font-normal  text-black"> You Like </p></button>
                  </div>
                  <div className="flex gap-1 mb-4">
                      < AiFillHeart  size={15} color="red"/>
                      <p className=" text-xs font-normal  text-black"> 24 </p>
                  </div>
                </div>
                <div>
                {chart_data.map((item)=>(
                  <ChartBox
                    userPT={item.userPT}
                    time={item.time}
                    text={item.text}
                    username={item.username}
                    follow={item.follow}
                  />
                ))}
                </div>
              </div>
              <Typography variant="h3" color="black" className="my-2">
                Review Panel
              </Typography>
            </Card>
          </div>
        </div>
        <div className=" mt-16 flex flex-col w-full items-center ">
          <div className="w-full flex flex-col items-center">
            <div className="relative flex flex-row  items-center mb-2 gap-5">
              {tabsData.map((tab, idx) => {
                return (
                  <button
                  key={idx}
                  className={` py-2  border-b-4 transition-colors duration-300 ${
                      idx === activeTabIndex
                      ? 'border-[#000000]'
                      : 'border-transparent hover:border-gray-200 '
                  }`}
                  // Change the active tab on click.
                  onClick={() => setActiveTabIndex(idx)}
                  >
                  <p className={`text-[12px] font-semibold items-center ${
                    idx === activeTabIndex
                    ? 'text-[#000000]'
                    : 'text-[#646464] '
                  }`}>{tab.label}</p> 
                  </button>
                );
                })}   
              </div >
              {/* Show active tab content. */}
              <div>
              {tabsData[activeTabIndex].content}
              </div>
          </div>
          <Typography variant="h3" color="black" className="my-2">
            Review Panel
          </Typography>
        </div>

        <div className=" flex flex-col w-full px-4  items-center ">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-3 my-5">
              {Product_data.map((item)=>(
                <Product_card
                  picture={item.picture}
                  />
              ))}
            </div>
          </div>
          <Typography variant="h3" color="black" className="my-2">
           Online Gallery
          </Typography>
        </div>
      </section>
    </div>
  );
}

export default Home;
