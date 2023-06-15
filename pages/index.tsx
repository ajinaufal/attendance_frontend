'use client';
import ButtonAttendance from "@/components/button_attendance";
import InputDateComponent from "@/components/input_date_component";
import SidabarComponents from "@/components/sidebar_components";
import { useEffect, useState } from 'react';
import '../app/globals.css'



export default function Home() {
    const [data, setData] = useState(Array<Attendance>);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:4000/attendance', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc',
                },
            });
            const jsonData = await response.json();
            const items = jsonData.data.map((item: any) => new Attendance(item));
            setData(items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className='flex flex-row'>
            <SidabarComponents name={'makan'}></SidabarComponents>
            <div className='flex w-full justify-center items-center h-screen px-8'>
                <div className='w-3/5 flex flex-col'>
                    <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-gray-800 rounded-t-2xl'>
                        <InputDateComponent></InputDateComponent>
                        <InputDateComponent></InputDateComponent>
                        <ButtonAttendance></ButtonAttendance>
                    </div>
                    <table className="bg-gray-800 border-none w-full">
                        <thead className='table-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    In
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Out
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Hours
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((attendance) => (
                                <tr>
                                    <td scope="col" className="px-6 py-3 text-center">
                                        {attendance.inAt}
                                    </td>
                                    <td scope="col" className="px-6 py-3 text-center">
                                        {attendance.outAt}
                                    </td>
                                    <td scope="col" className="px-6 py-3 text-center">
                                        {attendance.totalHour}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

class Attendance {
    public user_token: string;
    public createdAt: string;
    public inAt: string;
    public outAt: string;
    public totalHour: number;

    constructor(data: any) {
        this.user_token = data.user_token;
        this.inAt = new Date(parseInt(data.inAt)).toLocaleString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
        this.createdAt = data.createdAt;
        this.outAt = data.outAt;
        this.totalHour = Math.floor(Math.abs((!data.outAt ? Date.now() : new Date(parseInt(data.outAt)).getTime()) - new Date(parseInt(data.inAt)).getTime()) / (1000 * 60 * 60));
    }
}