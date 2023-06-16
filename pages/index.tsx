'use client';
import ButtonAttendance from "@/components/button_attendance";
import InputDateComponent from "@/components/input_date_component";
import { useEffect, useState } from 'react';
import LayoutComponents from "@/components/layouts_components";
import AttendanceModel from "@/models/attendance";
import { getToken, withAuth } from "@/helper/cookies_helper";

const HomePage = () => {
    const [data, setData] = useState(Array<AttendanceModel>);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:4000/attendance', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + getToken(),
                },
            });
            const jsonData = await response.json();
            const items = jsonData.data.map((item: any) => new AttendanceModel(item));
            setData(items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <LayoutComponents>
            <div className='flex w-full justify-center items-center h-screen lg:px-8'>
                <div className='w-3/5 flex flex-col'>
                    <div className='flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0 lg:space-x-4 p-4 bg-gray-800 rounded-t-2xl w-full'>
                        <InputDateComponent></InputDateComponent>
                        <InputDateComponent></InputDateComponent>
                        <ButtonAttendance></ButtonAttendance>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="bg-gray-800 border-none w-full rounded-b-2xl">
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
                                            <p className="text-white">{attendance.inAt}</p>
                                        </td>
                                        <td scope="col" className="px-6 py-3 text-center">
                                            <p className="text-white">{attendance.outAt}</p>
                                        </td>
                                        <td scope="col" className="px-6 py-3 text-center">
                                            <p className="text-white">{attendance.totalHour}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </LayoutComponents>
    )
}


export default withAuth(HomePage);

