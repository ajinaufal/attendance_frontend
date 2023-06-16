'use client';
import { setCookie, parseCookies } from 'nookies'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken';

export const withAuth = (WrappedComponent) => {
    const AuthenticatedComponent = (props) => {
        const router = useRouter();
        useEffect(() => {
            const token = getToken();
            jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_TOKEN, function (err, decoded) {
                if (err) {
                    router.push('/login');
                    destroyCookie(null, 'token');
                }
            });
        }, []);
        return <WrappedComponent {...props} />;
    };
    return AuthenticatedComponent;
};

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
