"use server";

import pauseTime from "./pauseTime";

const receiveFormData = async (prevState: any,formData: FormData) => {
    await pauseTime(2000);
    return { message: 'Success, your message has been sent!',};
}
export default receiveFormData;