import React from "react";

function Result() {
  return (

<div class="bg-gray-100 min-h-screen flex items-center justify-center px-16">
  <div class="relative w-full max-w-lg">
    <div class="m-8 bg-gray-100 rounded-full relative rounded-lg space-y-0.5">

    <div class="p-16 bg-gradient-to-tr from-green-200 to-green-300 flex items-center  space-x-8">
        <div class="h-50  w-auto  justify-center">
        <p class="font-dm text-sm font-medium text-gray-600">نتیجه تراکنش</p>
       </div>  
      </div>
      <div class="p-2 bg-gray-50 flex items-center justify-between space-x-8">
        <div class="flex-1 flex justify-between items-center">
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">نام و نام خانوادگی</td>
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">حامد میری</td>
        </div>
      </div>
      
      <div class="p-2 bg-gray-50  flex items-center justify-between space-x-8">
        <div class="flex-1 flex justify-between items-center">
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">کد ملی</td>
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">۰۰۶۳۲۶۸۸۰۹</td>
        </div>
      </div>
      <div class="p-2 bg-gray-50 flex items-center justify-between space-x-8">
        <div class="flex-1 flex justify-between items-center">
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">شماره موبایل</td>
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">۰۹۱۲۳۴۵۶۷۸</td>
        </div>
      </div>
      <div class="p-2 bg-gray-50 flex items-center justify-between space-x-8">
        <div class="flex-1 flex justify-between items-center">
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">آدرس</td>
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">تهران یوسف آباد</td>
        </div>
      </div>
      <div class="p-2 bg-gray-50 flex items-center justify-between space-x-8">
        <div class="flex-1 flex justify-between items-center">
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">تاریخ تولد</td>
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">۱۳۶۲/۰۱/۱۲</td>
        </div>
      </div>
   <div class="p-6 bg-gray-50 flex items-center justify-between space-x-8">
        <div class="flex-1 flex justify-between items-center">
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"> </td>
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
        </div>
      </div>
      <div class="font-regular relative mb-4 block w-full rounded-lg bg-gradient-to-tr from-purple-300 to-purple-100 p-4 text-base leading-5 text-green opacity-100">
        <button class=" text-center font-semibold w-full  ">تایید و ادامه</button>
        </div>

    </div>
  </div>
</div>
  );
}

export default Result;