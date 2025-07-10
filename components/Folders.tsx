"use client"
import { createFolder } from "@/actions/createFolde";
import { use, useState, useEffect } from "react";
import { MdCreateNewFolder } from "react-icons/md";
import { useSession } from "next-auth/react";
import { FaFolder } from "react-icons/fa";

export interface Folder {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  userId: string;
}


function Folders({folders}:{folders?: Folder[]}) {
  const session = useSession();
  const [select, setSelect] = useState(false)
  const [color, setColor] = useState(false);
  const [folder, setFolder] = useState(folders)
  const [folderName, setFolderName] = useState("");
  const [count, setCount] = useState(0);
  const [newFolder, setNewFolder] = useState<Folder[]>([]);
  useEffect(()=>{
    createFolder({folderName,userId})
    .then((res)=>{
      if (res?.folder) {
        setNewFolder([res.folder]);
      }
    })
  },[folder])
  console.log(folder);
  const userData = JSON.stringify(session.data?.user)
  var userId = "";
  if (typeof userData === "string") {
    userId = userData.substring(userData.indexOf("id")+5, userData.indexOf("}")-1);
  }
  
  return (
    <div className="flex flex-wrap gap-4 p-4">
        {folder?.map((folder,index)=>{
          return(
            <div key={index} className="flex flex-col items-center">
              <div><FaFolder className="cursor-pointer" size={75}  /></div>
              <div>{folder.name}</div>
            </div>
          )
        })}
        <div>
        <MdCreateNewFolder className="cursor-pointer" size={80} onClick={()=>setSelect(prev=>!prev)} />
        <div className = {`${select ? "flex" : "hidden"} flex-col border-2 gap-2 p-4 rounded-md shadow-md`}>
          <input type="text" className={`${color?"outline-red-500 outline-2 rounded-md":""} p-1`} placeholder="folder name" onChange={e => setFolderName(e.target.value)}/>
          <button className="bg-eblue" onClick={async()=> {folderName===""?setColor(prev=>!prev):setFolder(prev=>[...(prev || []), ...(newFolder || [])])}}>Create</button>
          <button onClick={()=>setSelect(prev=>!prev)}>Back</button>
        </div>
        </div>
    </div>
  )
}


export default Folders
