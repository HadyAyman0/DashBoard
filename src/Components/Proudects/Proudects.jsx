import { Button, Input, Option, Select } from '@material-tailwind/react'
import React from 'react'

export default function Proudects() {
    return (
        <>
            <section className=' w-full h-[100vh] overflow-hidden '>
                <div className="container flex  flex-col items-center p-5 ">
                    <form className=' mt-3 w-full flex-wrap gap-3   md:flex-row flex-col flex  p-2 '>
                        <div className='w-[30%]'>
                            <Input label='Proudect Name' className='' type='text' />
                        </div>
                        <div className='w-[33.333%]'>
                            <Select label='Categories'>
                                <Option>Manger</Option>
                                <Option>User</Option>
                                <Option>Admin</Option>

                            </Select>
                        </div>
                        <div className='w-[30%]'>
                            <Input label='Number of item' className='' type='Number' />
                        </div>
                        <div className='w-[45%]'>
                            <Input label='Price' className='' type='number' />
                        </div>
                        <div className='w-[45%]'>
                            <Input label='Proudect Main image' className='' type='file' />
                        </div>
                        <Button type='submit' className=' md:mx-auto '>Add Proudect</Button>
                    </form>
                    <div className="container mx-auto p-4">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-black ">
                                <thead className='bg-[#d7d4d4a9] text-gray-500 text-xs font-medium'>
                                    <tr className=''>
                                        <th className="py-2 px-4  ">Proudect Name</th>
                                        <th className="py-2 px-4  ">Number of items</th>
                                        <th className="py-2 px-4  ">Price</th>
                                        <th className="py-2 px-4  ">Main image</th>
                                        <th className="py-2 px-4  ">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" text-center">
                                        <td className="py-2 px-4 gap-3 flex items-center justify-center">
                                            Ay 7aga
                                        </td>
                                        <td className="py-2 px-4">
                                            23
                                        </td>
                                        <td className="py-2 px-4">
                                            5000 L.E
                                        </td>
                                        <td className="py-2 px-4">

                                        </td>
                                        <td className="py-2 px-4">
                                            <div className='flex gap-3 justify-center'>
                                                <i class="fa-regular fa-pen-to-square cursor-pointer"></i>
                                                <i class="fa-solid fa-trash-can-arrow-up cursor-pointer"></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
