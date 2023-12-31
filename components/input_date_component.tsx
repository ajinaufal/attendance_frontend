
import React from 'react';
export default function InputDateComponent() {
    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <svg enableBackground="new 0 0 24 24" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="calendar_1_"><path d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1   c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667   C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667   C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1   s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z" fill="#FFFFFF" /><rect fill="#FFFFFF" height="3" width="4" x="7" y="12" /><rect fill="#FFFFFF" height="3" width="4" x="7" y="17" /><rect fill="#FFFFFF" height="3" width="4" x="7" y="22" /><rect fill="#FFFFFF" height="3" width="4" x="14" y="22" /><rect fill="#FFFFFF" height="3" width="4" x="14" y="17" /><rect fill="#FFFFFF" height="3" width="4" x="14" y="12" /><rect fill="#FFFFFF" height="3" width="4" x="21" y="22" /><rect fill="#FFFFFF" height="3" width="4" x="21" y="17" /><rect fill="#FFFFFF" height="3" width="4" x="21" y="12" /></g></svg>
            </div>
            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />
        </div>

    );
}
