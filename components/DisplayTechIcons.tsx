import { cn, getTechLogos } from '@/src/lib/utils';
import React from 'react'
import Image from 'next/image'

const DisplayTechIcons = async ({techStack} : TechIconProps) => {

    const techIcons = await getTechLogos(techStack);
    
  return (
    <div>{techIcons.slice(0, 3).map(({tech, url} , index) => (
        <div key={tech} className={"flex flex-row bg-dark-300 rounded-full p-2 flex-center"} >
            <Image src={url} alt={tech} width={100} height={100} className="size-5" />
        </div>
    ))}
    </div>
  )
}

export default DisplayTechIcons