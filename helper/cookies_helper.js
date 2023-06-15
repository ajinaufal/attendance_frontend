'use client';
import { setCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken';

export function useTokenValidation() {

    const token = getToken();
    let decode;
    console.log(decode);
    jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_TOKEN, function (err, decoded) {
        if (err) {
            const router = useRouter();
            router.push('/login');
            destroyCookie(null, 'token');
        }
    });
}

export function destroyToken() {
    destroyCookie(null, 'token');
}

export function saveToken(token) {
    setCookie(null, 'token', token, {
        maxAge: 7 * 24 * 60 * 60,
        path: '/',
        secure: true,
        sameSite: 'strict',
    });
}

export function getToken() {
    const cookies = parseCookies();
    return cookies.token || null;
}

export function decodeToken(token) {
    decode = jwt.decode(token);
    console.log(decode);
    return decode;
}
