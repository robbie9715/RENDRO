import {AiOutlineHeart} from "react-icons/ai"

export function ChartBox({userPT, time, text, username, follow }) {
  return (
    <div className="w-full p-4">
        <div className="flex flex-row gap-3">
            <div>
                <img className="rounded-full w-36 " src={userPT} alt="..."/>
            </div>
            <div>
                <div className="flex mb-2">
                    <p className=" text-xs font-semibold text-black">{username}</p>
                    <p className=" text-xs font-normal  text-black"> - </p>
                    <p className=" text-xs font-normal  text-black">{time}</p>
                    <p className=" text-xs font-normal  text-black">min ago</p>
                </div>
                <div className="mb-2 text-left">
                    <p className=" text-xs font-normal  text-black">{text}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex gap-3">
                        <button><p className=" text-xs font-normal  text-black"> Reply </p></button>
                        <button><p className=" text-xs font-normal  text-black"> Like?</p></button>
                    </div>
                    <div className="flex gap-1 mb-2">
                        < AiOutlineHeart  size={15} color="black"/>
                        <p className=" text-xs font-normal  text-black ">{follow}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default ChartBox;
