import { Button, Input, Option, Select } from '@material-tailwind/react'
import React from 'react'

export default function CreateOffers() {
    return (
        <>
            <section className=' w-full h-[100vh] overflow-hidden '>
                <div className="container flex  flex-col items-center p-5 ">
                    <form className=' mt-3 w-full flex-wrap gap-3   md:flex-row flex-col flex  p-2 '>
                        <div className='w-[30%]'>
                            <Input label='name' className='' type='text' />
                        </div>
                        <div className='w-[30%]'>
                            <Input label='Title' className='' type='text' />
                        </div>
                        <div className='w-[30%]'>
                            <Input label='Discount' className='' type='number' />
                        </div>
                        <div className='w-[30%]'>
                            <Input label='From' className='' type='date' />
                        </div>
                        <div className='w-[30%]'>
                            <Input label='To' className='' type='date' />
                        </div>
                        <div className='w-[30%]'>
                            <Input label='Booking number' className='' type='number' />
                        </div>
                        <div className='w-[45%]'>
                            <Input label='Cover image' className='' type='file' />
                        </div>
                        <div className='w-[45%]'>
                            <Select label='Users'>
                                <Option>Ahmed</Option>
                                <Option>Mohamed</Option>
                                <Option>Hady</Option>
                            </Select>
                        </div>
                        <Button type='submit' className=' md:mx-auto '>Add Offer</Button>
                    </form>
                    <div className="container mx-auto p-4">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-black ">
                                <thead className='bg-[#d7d4d4a9] text-gray-500 text-xs font-medium'>
                                    <tr className=''>
                                        <th className="py-2 px-4  ">Offer Name</th>
                                        <th className="py-2 px-4  ">Ttile</th>
                                        <th className="py-2 px-4  ">Discount</th>
                                        <th className="py-2 px-4  ">Vaild From</th>
                                        <th className="py-2 px-4  "> Valid to</th>
                                        <th className="py-2 px-4  ">User</th>
                                        <th className="py-2 px-4  ">image</th>
                                        <th className="py-2 px-4  ">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" text-center">
                                        <td className="py-2 px-4 gap-3 flex items-center justify-center">

                                        </td>
                                        <td className="py-2 px-4">

                                        </td>
                                        <td className="py-2 px-4">

                                        </td>
                                        <td className="py-2 px-4">

                                        </td>
                                        <td className="py-2 px-4">

                                        </td>
                                        <td className="py-2 px-4">

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
