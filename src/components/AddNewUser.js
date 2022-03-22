import React, { useEffect, useState, useRef } from 'react'
import AddUserInput from './AddUserInput'

const AddNewUser = ({fetchUsers}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [yearsOfExp, setYearsOfExp] = useState('');
    const prevPhoneNumRef = useRef();

    const inputs = [
        {
            placeholder: 'First name',
            type: "text",
            name: "firstname",
            setValue: setFirstName,
            value: firstName
        },
        {
            placeholder: 'Last name',
            type: "text",
            name: "lastname",
            setValue: setLastName,
            value: lastName
        }, {
            placeholder: 'youremail@exmaple.com',
            type: "text",
            name: "email",
            setValue: setEmail,
            value: email
        }, {
            placeholder: 'Country',
            type: "text",
            name: "country",
            setValue: setCountry,
            value: country
        }, {
            placeholder: 'City',
            type: "text",
            name: "city",
            setValue: setCity,
            value: city
        }, {
            placeholder: '054-4765505',
            type: "text",
            name: "phonenum",
            setValue: setPhoneNum,
            value: phoneNum
        }, {
            placeholder: 'Job Title',
            type: "text",
            name: "jobtitle",
            setValue: setJobTitle,
            value: jobTitle
        }, {
            placeholder: 'Years Of Experience',
            type: "number",
            name: "yearsofexp",
            setValue: setYearsOfExp,
            value: yearsOfExp
        }
    ]

    const clearData = () =>{
        setFirstName('')
        setLastName('')
        setEmail('')
        setCountry('')
        setCity('')
        setPhoneNum('')
        setJobTitle('')
        setYearsOfExp('')
    }

    const handleSubmit = (event) => {
        if (firstName && lastName && email && country && city && phoneNum && jobTitle && yearsOfExp)
            fetch('http://34.76.62.170:8080/addUser', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({firstname:firstName,lastname:lastName,email,country,city,phonenum:phoneNum,jobtitle:jobTitle,yearsofexp:parseInt(yearsOfExp)})
            })
            .then(response => {
                if(response.status === 200){
                    clearData();
                    fetchUsers();
                }

            })
            .catch(err => console.log("error posting new user",err))
        else {
            alert("All fields must be filled before adding new user")
        }
        event.preventDefault();
    }

    useEffect(() => {
        if (phoneNum.length === 3) {
            if (prevPhoneNumRef.current.length !== 4)
                setPhoneNum(phoneNum + "-")
        }
        else if (phoneNum.length > 11)
            setPhoneNum(phoneNum.substring(0, 11))
        prevPhoneNumRef.current = phoneNum
    }, [phoneNum])

    useEffect(() => {
        if (yearsOfExp < 0) setYearsOfExp(0)
    }, [yearsOfExp])

    return (
        <>
            <p className='text-white'>Add new user</p>
            <div className='bg-white w-[350px] p-2 h-[375px] rounded-xl  shadow-xl'>
                <form className='flex flex-col justify-center h-full items-center ' onSubmit={handleSubmit}>
                    {inputs.map((input,index) => <AddUserInput key={index} placeholder={input.placeholder} type={input.type} name={input.name} setValue={input.setValue} value={input.value} />)}
                    <input className='h-10 my-2 w-40 rounded-2xl self-center shadow-md bg-gray-600 text-white ease-in-out duration-100 hover:bg-gray-500 cursor-pointer transition' type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default AddNewUser