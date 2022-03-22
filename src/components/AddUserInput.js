import React from 'react'

const AddUserInput = ({placeholder,type,name,setValue,value}) => {
    return (
        <input value={value} onChange={e => setValue(e.target.value)} className='bg-gray-200 my-1 h-6 flex align-center p-3 rounded-lg outline-none shadow-sm text-sm w-3/4 ' placeholder={placeholder} type={type} name={name} />
    )
}

export default AddUserInput