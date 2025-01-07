import { titleFont } from '@/config/font'
import React from 'react'
interface Props {
    title :string ,
    subtitle :string ,
    className ?: string , 
}
export const Title = ({title , subtitle , className}:Props) => {
  return (
    <div className={`mt-0 ${className}`}>
        <h1 className={`${titleFont.className} antialiased text-3xl font-semibold my-2`}>{title}</h1>
        {
            subtitle &&(
                <h3 className='text-xl mb-5'>{subtitle}</h3>
            )
        }    
    </div>
  )
}
