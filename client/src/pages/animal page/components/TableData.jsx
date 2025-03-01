import React from 'react'
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const TableData = (props) => {
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    return (
        <tbody>
            {
                props.currentPosts.map((item) => {
                    return (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                {item.id}
                            </td>
                            <th scope="row" className="flex gap-3 items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img
                                    className="w-8 h-8 rounded-full object-cover"
                                    src={`https://zoofeed-api-gamma.vercel.app/${item.imageUrl}`}
                                    alt="animal"
                                />
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                {item.sex}
                            </td>
                            <td className="px-6 py-4">
                                {item.age}
                            </td>
                            <td className="px-6 py-4">
                                <div class="flex items-center mr-4">
                                    {
                                        props.likeData.filter(data => data.id === item.id).length !== 0
                                            ? <input onClick={() => props.animalUnchecked(item.id)} checked id="green-checkbox" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
                                            : <input onClick={() => props.animalChecked(item.id)} id="green-checkbox" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
                                    }
                                    <label for="green-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">take care of animal</label>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex gap-5'>
                                    <div
                                        className='cursor-pointer'
                                        onClick={() => props.detailHandler(item.id)}
                                    >
                                        <FaEye size={23} className='fill-[#3BACB6]' />
                                    </div>
                                    <div className='cursor-pointer' onClick={() => props.editHandler(item.id)}>
                                        <FaEdit size={23} className='fill-gray-500' />
                                    </div>
                                    <div
                                        className='cursor-pointer'
                                        onClick={() => props.deleteHandler(item.id)}
                                    >
                                        <FaTrash size={20} className='fill-[#F94C66]' />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody >
    )
}

export default TableData