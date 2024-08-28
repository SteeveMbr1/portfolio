import Image from "next/image";
import React from 'react'
import './SkillIcon.scss'

function SkillIcon({id, src} : {id:number, src:string}) {
  return (
    <div key={id} className="item bg-slate-400 select-none"><Image src={src} alt="logo" width={100} height={100}></Image></div>
  )
}

export default SkillIcon