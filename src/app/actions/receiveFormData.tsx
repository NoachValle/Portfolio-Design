"use server";

const receiveFormData = async (prevState: any,formData: FormData) => {
    return { message: 'Success, your message has been sent!',};
}
export default receiveFormData;