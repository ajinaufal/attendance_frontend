'use client';
import LayoutComponents from "@/components/layouts_components";
import ModalComponents from "@/components/modal_components";
import { getToken, withAuth } from "@/helper/cookies_helper";
import ProfileModel from "@/models/profile";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'


function ProfilePage() {
    const [data, setData] = useState<ProfileModel | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [handphone, setHandphone] = useState('');
    const [position, setPosition] = useState('');
    const [token, setToken] = useState('');
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [isOpenPassword, setisOpenPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [currentPassword, setcurrentPassword] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const profileData = await fetchProfileData();
            if (profileData) {
                var data = new ProfileModel(profileData);
                setData(data);
                setName(data.name);
                setEmail(data.email);
                setHandphone(data.handphone);
                setPosition(data.position);
                setToken(data.token);
            }
        };
        fetchData();
    }, []);

    const handleFeedbackPasswod = () => {
        setisOpenPassword(!isOpenPassword)
        setPassword('');
        setcurrentPassword('');
    }

    return (
        <LayoutComponents>
            <div className='flex flex-col w-full justify-center items-center h-screen lg:px-8'>
                <div className="max-w-md bg-white border border-gray-200 rounded-lg box-border flex flex-col justify-center items-star w-full">
                    <button onClick={() => setIsOpenProfile(!isOpenProfile)} className="flex ml-4 lex items-center justify-center text-white bg-blue-400 font-medium rounded-lg text-sm px-4 py-2 hover:bg-blue-600 max-w-[4rem] self-end mr-4 mt-4">Edit</button>
                    <div className="flex flex-col pb-4 pl-4 pr-4 pt-1 gap-4">
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Profile</h1>
                        <div className="flex flex-row">
                            <div className="font-semibold">Name : </div>
                            <div className="px-4">{name}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="font-semibold">Email : </div>
                            <div className="px-4">{email}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="font-semibold">Handphone : </div>
                            <div className="px-4">{handphone}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="font-semibold">Position : </div>
                            <div className="px-4">{position}</div>
                        </div>
                    </div>
                </div>
                <div className="max-w-md bg-white border border-gray-200 rounded-lg box-border flex flex-col justify-center items-start gap-4 w-full mt-6">
                    <div className="flex flex-col pb-4 pl-4 pr-4 pt-1 gap-4">
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Password</h1>
                        <div className="flex flex-row">
                            <div className="font-semibold pt-1">Password : </div>
                            <button onClick={() => setisOpenPassword(!isOpenPassword)} className="ml-4 lex items-center justify-center text-white bg-blue-400 font-medium rounded-lg text-sm px-4 py-2 hover:bg-blue-600 ">Change Password</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponents title={"Edit Profile"} isOpen={isOpenProfile} onClick={() => setIsOpenProfile(!isOpenProfile)}>
                <form className="space-y-4 md:space-y-6" onSubmit={(e) => updateProfile(e, { name, email, handphone, position, id: token }, () => setIsOpenProfile(!isOpenProfile))} >
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
                        <input type="text" id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                        <input type="email" name="email" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">handphone</label>
                        <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value={handphone} onChange={(e) => setHandphone(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                        <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value={position} onChange={(e) => setPosition(e.target.value)} />
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
                </form>
            </ModalComponents>
            <ModalComponents title={"Edit Profile"} isOpen={isOpenPassword} onClick={() => setisOpenPassword(!isOpenPassword)}>
                <form className="space-y-4 md:space-y-6" onSubmit={(e) => updatePassword(e, { password, currentPassword }, handleFeedbackPasswod)} >
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                        <input type="password" id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="" value={currentPassword} onChange={(e) => setcurrentPassword(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="email" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value={password} onChange={(e: any) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
                </form>
            </ModalComponents>
        </LayoutComponents>
    );
}


async function fetchProfileData(): Promise<ProfileModel | null> {
    try {
        const response = await fetch('http://127.0.0.1:4000/users/profile', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + getToken(),
            },
        });
        if (response.ok) {
            const jsonData = await response.json();
            return new ProfileModel(jsonData.data);
        } else {
            console.error('Failed to fetch profile data');
            return null;
        }
    } catch (error) {
        console.error('Error fetching profile data:', error);
        return null;
    }
}

async function updateProfile(e: any, payload: any, changeOpen: () => void) {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:4000/users/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const data = await response.json();
        changeOpen();
        console.log('succes:', data);
    } else {
        console.log('Error:', response.statusText);
    }
}

async function updatePassword(e: any, payload: any, changeOpen: () => void) {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:4000/auth/change_password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const data = await response.json();
        changeOpen();
        console.log('succes:', data);
    } else {
        console.log('Error:', response.statusText);
    }
}

export default withAuth(ProfilePage);