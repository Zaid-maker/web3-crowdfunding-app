import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: ''
    });

    /**
     * When the user changes the value of a form field, update the form state with the new value.
     */
    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    return (
        <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
            {isLoading && <Loader />}

            <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
                <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Start a Campaign</h1>
            </div>

            <form className='w-full mt-[65px] flex flex-col gap-[30px]'>
                <div className='flex flex-wrap gap-[40px]'>
                    <FormField
                        labelName="Your Name *"
                        placeholder="John Doe*"
                        inputType="text"
                        value={form.name}
                        handleChange={(e) => handleFormFieldChange('name', e)}
                    />
                    <FormField
                        labelName="Campaign Title *"
                        placeholder="Write a title*"
                        inputType="text"
                        value={form.title}
                        handleChange={(e) => handleFormFieldChange('title', e)}
                    />
                </div>

                <FormField
                    labelName="Story *"
                    placeholder="Write your story"
                    isTextArea
                    value={form.description}
                    handleChange={(e) => handleFormFieldChange('description', e)}
                />
            </form>
        </div>
    )
}

export default CreateCampaign;