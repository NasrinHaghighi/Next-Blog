import React from 'react'
import {TbAdjustmentsAlt} from 'react-icons/tb'


function SortPart() {
  return (
    <div class="  hidden md:block md:col-span-9">
    <div class="flex bg-white rounded-3xl  px-4">
    <div class='flex gap-x-4 items-center py-4'>
    <TbAdjustmentsAlt className='w-6 h-6 fill-purple-100 '/><span>مرتب سازی :</span>
    </div>
    <ul className='flex gap'>
    <li href='#' class='px-8 py-4 cursor-progress hover:bg-purple-50'>جدیدترین</li>
    <li href='#' class='px-8 py-4 cursor-progress hover:bg-purple-50'>محبوبترین</li>
    <li href='#' class='px-8 py-4 cursor-progress hover:bg-purple-50'>پر بازدیدترین</li>
    </ul>
    </div>
  </div>
  )
}

export default SortPart