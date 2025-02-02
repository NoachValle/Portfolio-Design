"use client";
import { useActionState } from "react";
import receiveFormData from "../actions/receiveFormData";

const initialState = {
    message: '',
    error_message: "",
}
const Contact = () => {
    const [state, formAction, pending] = useActionState(receiveFormData, initialState);
    return (
        <div className="bg-white flex justify-evenly items-center text-black">
            <div className=" bg-white flex max-w-screen-xl flex-col md:h-[80vh] md:flex-row">
                <section className="bg-white ">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h3 className=" bg-orange-500 text-center text-2xl  rounded">{state.message}</h3>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">Contact Me </h2>
                        <p className="mb-7 lg:mb-16 font-light text-center sm:text-xl"> Need someone to hire for your website, or design something Contact me. Let me know.</p>
                        <form action={formAction} className="space-y-8">
                            <div>
                                <label className="block mb-2 text-sm font-medium ">Your email</label>
                                <input type="email" id="email" className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:placeholder-bg-white dark:text-white  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" ></input>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium  ">Subject</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm rounded-lg  border shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:bg-black dark:border-black dark:placeholder-gray-400  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you"></input>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium">Your message</label>
                                <textarea id="message" className="block p-2.5 w-full text-sm rounded-lg shadow-sm borderfocus:ring-primary-500  focus:border-primary-500 dark:bg-black  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm  font-medium text-center dark:bg-[#dc6601] rounded-lg sm:w-fit  hover:bg-[#e67f26] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}




export default Contact;