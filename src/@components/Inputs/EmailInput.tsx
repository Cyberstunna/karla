import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

interface EmailInputProps {
    onTextChangeAction: () => void
    onSubmitAction: () => void
}

const EmailInput = () => {
    return (
        <div className="flex flex-row items-center place-content-between w-full bg-white px-2">
            <input
                type="email"
                placeholder="customer@email.com"
                className="w-full max-w-md p-2 text-base bg-transparent border border-none rounded focus:outline-none focus:border-blue-500 placeholder-karla-200 text-karla-500"
                required
            />
            <button>
                <LuArrowRight size={24} className="ml-2 text-karla-500" />
            </button>
        </div>
    );
};

export default EmailInput;
