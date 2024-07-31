import { Button, Input, Option, Select, } from '@material-tailwind/react'

import React from 'react'

export default function CreateAccount() {
    return (
        <>
            <section className=' w-full h-[100vh] overflow-hidden '>
                <div className="container flex  flex-col items-center p-5 ">
                    <form className=' mt-3 w-full flex-wrap gap-3   md:flex-row flex-col flex  p-2 '>
                        <div className='w-[30%]'>
                            <Input label='username' className='' type='text' />
                        </div>
                        <div className='w-[30%]'>
                            <Input label='BirthDay' className='' type='date' />
                        </div>
                        <div className='w-[30%]'>
                            <Input label='Phone' className='' type='tel' />
                        </div>
                        <div className='w-[30%]'>
                            <Input label='password' className='' type='password' />
                        </div>
                        <div className='w-[30%]'>
                            <Input label='Email' className='' type='email' />
                        </div>
                        <div className='w-[33.333%]'>
                            <Select label='User type'>
                                <Option>Manger</Option>
                                <Option>User</Option>
                                <Option>Admin</Option>

                            </Select>
                        </div>
                        <Button type='submit' className=' md:mx-auto '>Add User</Button>
                    </form>
                    <div className="container mx-auto p-4">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-black ">
                                <thead className='bg-[#d7d4d4a9] text-gray-500 text-xs font-medium'>
                                    <tr className=''>
                                        <th className="py-2 px-4  ">UserName</th>
                                        <th className="py-2 px-4  ">Birthdate</th>
                                        <th className="py-2 px-4  ">Phone</th>
                                        <th className="py-2 px-4  ">Email</th>
                                        <th className="py-2 px-4  ">User Type</th>
                                        <th className="py-2 px-4  ">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" text-center">
                                        <td className="py-2 px-4 gap-3 flex items-center justify-center">
                                            Hady Ayman
                                        </td>
                                        <td className="py-2 px-4">
                                            3/08/2000
                                        </td>
                                        <td className="py-2 px-4">
                                            01119551085
                                        </td>
                                        <td className="py-2 px-4">
                                            hadyayman726@gmail.com
                                        </td>
                                        <td className="py-2 px-4">
                                           Admin 
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
