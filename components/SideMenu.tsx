"use client"
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { HiDocumentSearch } from "react-icons/hi";
import { BsImages } from "react-icons/bs";
import { GrMultimedia } from "react-icons/gr";
import { IoIosPie } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SideMenu() {

    const [active, setActive] = useState("Dashboard");
    const router = useRouter();

  return (
    <div className="flex p-7 flex-col text-xl font-extrabold space-y-16">
      {contentArray.map((item,index)=> {
        return (
            <div key={index} onClick={()=>{setActive(item.name);router.push(item.link)}} className={`cursor-pointer flex items-center space-x-2 rounded-4xl p-2 ${active === item.name ? "bg-blue-500 text-white" : "text-gray-700"}`}>
                <div className={`${active === item.name ? "text-gray-700" : "text-blue-500"}`}>{item.icon}</div>
                <div>{item.name}</div>
            </div>
        )
      })}
    </div>
  )
}

const contentArray = [
    {
        name:"Dashboard",
        icon: <RiDashboardHorizontalFill size={25} />,
        link: "/dashboard"
    },
    {
        name:"Folders",
        icon: <HiDocumentSearch size={25} />,
        link: "/dashboard/folders"
    },
    {
        name:"Images",
        icon: <BsImages size={25} />,
        link: "/dashboard/images"
    },
    {
        name:"Media",
        icon: <GrMultimedia size={25} />,
        link: "/dashboard/media"
    },
    {
        name:"Others",
        icon: <IoIosPie size={25} />,
        link: "/dashboard/others"
    }
]

export default SideMenu


