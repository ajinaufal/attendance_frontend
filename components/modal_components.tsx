import React, { DOMAttributes, ReactNode } from 'react';

export default function ModalComponents({ title, children, isOpen, onClick }: { title: string, children: ReactNode, isOpen: Boolean, onClick: () => void }) {

    const changeModal = onClick;

    return (
        <div className={isOpen ? "relative z-40" : "relative z-40 hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 max-w-xl mx-auto my-auto">
                    {/*  Modal header  */}
                    <div className="flex justify-between mb-4 rounded-t sm:mb-5">
                        <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                            <h3 className="font-semibold ">{title}</h3>
                        </div>
                        <div>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white" onClick={changeModal}>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    </div>
                    {/* Modal Body */}
                    {children}
                </div>
            </div>
        </div>
    );
}