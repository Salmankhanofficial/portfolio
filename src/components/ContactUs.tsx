// "use client";
// import React from "react";
// import Button from "./Button";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import Input from "./Input";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ContactUs = () => {
//   const schema = yup.object({
//     firstName: yup.string().required("First name is required"),
//     lastName: yup.string().required("Last name is required"),
//     email: yup.string().email("Invalid email").required("Email is required"),
//     subject: yup.string().required("subject is required"),
//     message: yup.string().required("Message is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = async (data: any) => {
//     const { firstName, lastName, email, subject, message } = data;
//     try {
//       console.log("Sending email with data: ", data);
//       const templateParams = {
//         firstName,
//         lastName,
//         email,
//         subject,
//         message,
//       };
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
//         process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
//         templateParams,
//         process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ""
//       );

//       toast.success("Message sent successfully");

//       reset();
//     } catch (e) {
//       console.log("Error sending email: ", e);
//       toast.error("this is error");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center  mb-10 sm:my-20">
//       <div className="w-full sm:w-3/5">
//         <h1 className=" text-2xl sm:text-3xl text-nowrap lg:text-4xl font-semibold text-center my-2">
//           Lets Design Together
//         </h1>

//         <p className="text-sm md:text-base text-center">
//           Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
//           felis ligula aliquam venenatis fghh hgjj nisi ante.
//         </p>
//       </div>
//       <div className="flex flex-wrap sm:flex-nowrap w-full justify-center gap-4 mt-6">
//         <div className="w-full  bg-[#F3F3F3] flex flex-col rounded-none md:rounded-r-lg py-3 px-10 pb-10">
//           <form
//             className="flex flex-col gap-10 w-full font-Poppins"
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <div className="flex flex-col gap-5 md:gap-0 md:flex-row w-full items-center justify-between">
//               <div className="w-full md:w-2/5 flex flex-col">
//                 <label className="text-black py-2">First Name</label>
//                 <Input
//                   inputClassName="bg-[#F6FAF9] focus:outline-none border-none rounded-md "
//                   className={`pb-2 border-0 border-b-[1px] ${
//                     errors?.firstName ? " border-red-400" : "border-black"
//                   }`}
//                   type="text"
//                   name="firstName"
//                   errors={errors}
//                   placeholder="John"
//                   register={register}
//                 />
//               </div>
//               <div className="w-full md:w-2/5 flex flex-col">
//                 <label className="text py-2">Last Name</label>
//                 <Input
//                   inputClassName="bg-[#F6FAF9] focus:outline-none border-none rounded-md "
//                   className={`pb-2 border-0 border-b-[1px] ${
//                     errors?.lastName ? " border-red-400" : "border-black"
//                   }`}
//                   type="text"
//                   name="lastName"
//                   errors={errors}
//                   placeholder="Deo"
//                   register={register}
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-5 md:gap-5 md:flex-row w-full items-center justify-between">
//               <div className="w-full md:w-2/5 flex flex-col">
//                 <label className="text-black py-2">Email</label>
//                 <Input
//                   inputClassName="bg-[#F6FAF9] focus:outline-none border-none rounded-md "
//                   className={`pb-2 border-0 border-b-[1px] ${
//                     errors?.email ? " border-red-400" : "border-black"
//                   }`}
//                   type="email"
//                   name="email"
//                   errors={errors}
//                   placeholder="Example@gmail.com"
//                   register={register}
//                 />
//               </div>
//               <div className="w-full md:w-2/5 flex flex-col">
//                 <label className="text py-2">Subject</label>
//                 <Input
//                   inputClassName="bg-[#F6FAF9] focus:outline-none border-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//                   className={`pb-2 border-0 border-b-[1px] ${
//                     errors?.subject ? " border-red-400" : "border-black"
//                   }`}
//                   type="text"
//                   name="subject"
//                   errors={errors}
//                   placeholder="Enter Subject"
//                   register={register}
//                 />
//               </div>
//             </div>
        
//             <div className="flex flex-col gap-4">
//               <h1 className=" text-sm font-Poppins font-medium">Message</h1>
//               <textarea
//                 className={`bg-[#F6FAF9] focus:outline-none border-none rounded-md pb-2 border-0 border-b-[1px] ${
//                   errors?.message ? " border-red-400" : "border-[#8D8D8D]"
//                 }`}
//                 // name="message"
//                 placeholder="Write your message.."
//                 {...register("message")}
//               ></textarea>
//               {errors.message && (
//                 <span className="text-red-400 text-sm">
//                   {errors.message.message}
//                 </span>
//               )}
//             </div>
//             <div className=" flex justify-end mt-4 sm:mt-2">
//               <Button
//                 type="submit"
//                 className={
//                   "bg-[#ff6300] hover:bg-white border hover:border-[#ff6300] hover:text-black text-lg rounded-[3px] h-10 w-40"
//                 }
//               >
//                 <h1 className="font-semibold text-sm font-NotoSans">
//                   Send Message
//                 </h1>
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



"use client";
import React from "react";
import Button from "./Button";
import Input from "./Input";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center  mb-10 sm:my-20">
      <div className="w-full sm:w-3/5">
        <h1 className=" text-2xl sm:text-3xl text-nowrap lg:text-4xl font-semibold text-center my-2">
          Lets Design Together
        </h1>

        <p className="text-sm md:text-base text-center">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hgjj nisi ante.
        </p>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap w-full justify-center gap-4 mt-6">
        <div className="w-full  bg-[#F3F3F3] flex flex-col rounded-none md:rounded-r-lg py-3 px-10 pb-10">
          <form
            className="flex flex-col gap-10 w-full font-Poppins"
            onSubmit={() => {}}
          >
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row w-full items-center justify-between">
              <div className="w-full md:w-2/5 flex flex-col">
                <label className="text-black py-2">First Name</label>
                <Input
                  inputClassName="bg-[#F6FAF9] focus:outline-none border-none rounded-md "
                  className="pb-2 border-0 border-b-[1px] border-black"
                  type="text"
                  name="firstName"
                  placeholder="John"
                />
              </div>
              <div className="w-full md:w-2/5 flex flex-col">
                <label className="text py-2">Last Name</label>
                <Input
                  inputClassName="bg-[#F6FAF9] focus:outline-none border-none rounded-md "
                  className="pb-2 border-0 border-b-[1px] border-black"
                  type="text"
                  name="lastName"
                  placeholder="Deo"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 md:gap-5 md:flex-row w-full items-center justify-between">
              <div className="w-full md:w-2/5 flex flex-col">
                <label className="text-black py-2">Email</label>
                <Input
                  inputClassName="bg-[#F6FAF9] focus:outline-none border-none rounded-md "
                  className="pb-2 border-0 border-b-[1px] border-black"
                  type="email"
                  name="email"
                  placeholder="Example@gmail.com"
                />
              </div>
              <div className="w-full md:w-2/5 flex flex-col">
                <label className="text py-2">Subject</label>
                <Input
                  inputClassName="bg-[#F6FAF9] focus:outline-none border-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  className="pb-2 border-0 border-b-[1px] border-black"
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className=" text-sm font-Poppins font-medium">Message</h1>
              <textarea
                className="bg-[#F6FAF9] focus:outline-none border-none rounded-md pb-2 border-0 border-b-[1px] border-[#8D8D8D]"
                placeholder="Write your message.."
              ></textarea>
            </div>
            <div className=" flex justify-end mt-4 sm:mt-2">
              <Button
                type="submit"
                className="bg-[#ff6300] hover:bg-white border hover:border-[#ff6300] hover:text-black text-lg rounded-[3px] h-10 w-40"
              >
                <h1 className="font-semibold text-sm font-NotoSans">
                  Send Message
                </h1>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

