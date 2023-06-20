import SidabarComponents from "@/components/sidebar_components";
import { ReactNode } from "react";
import '../app/globals.css'

export default function LayoutComponents({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-row container mx-auto bg-white'>
            <SidabarComponents name={'Profile'}></SidabarComponents>
            {children}
        </div>

    )
}