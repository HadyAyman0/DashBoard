import { Button, Input } from '@material-tailwind/react'
import React from 'react'

export default function CreateAds() {
    return (
        <>
            <section className=' w-full h-[100vh] overflow-hidden '>
                <div className="container flex  flex-col items-center p-5 ">
                    <form className=' mt-3 w-full p-2 '>
                        <div className='w-[50%]'>
                            <Input label='image' className='' type='file' />
                        </div>
                        <Button type='submit' className='mt-3'>Add ads</Button>
                    </form>
                    <div className="container mx-auto p-4">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-black ">
                                <thead className='bg-[#d7d4d4a9] text-gray-500 text-xs font-medium'>
                                    <tr className=''>
                                        <th className="py-2 px-4  ">Cover</th>
                                        <th className="py-2 px-4  ">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" text-center">
                                        <td className="py-2 px-4 gap-3 flex items-center justify-center">
                                        </td>
                                        <td className="py-2 px-4">
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

