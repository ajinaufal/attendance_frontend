import { useTokenValidation, saveToken, getToken, destroyToken } from '../helper/cookies_helper'

export default function ButtonAttendance() {

    async function handleAttendance(e: any) {
        e.preventDefault();
        console.log('masuk');

        const response = await fetch('http://127.0.0.1:4000/attendance/in', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            },

        });
        console.log(response);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            console.log('Error:', response.statusText);
        }
    };

    return (
        <button onClick={handleAttendance} type="button" className="flex items-center justify-center text-white bg-blue-400 font-medium rounded-lg text-sm px-4 py-2 hover:bg-blue-600 ">
            <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path>
            </svg>
            Absen
        </button>
    );
}