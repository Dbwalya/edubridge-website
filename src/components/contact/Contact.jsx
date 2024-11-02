export default function Contact() {
    return (
        <div className="flex items-center flex-col justify-center pb-16 p-12  bg-gray-100">
            <div className="text-center mb-10 pt-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Contact Us
                </h1>
                <p className="text-md md:text-lg text-gray-600 mt-4">
                    Reach out anytime for assistance, guidance, or feedback on our services.
                </p>
            </div>

            <div className="flex mx-auto w-full max-w-[1180px]">
                <form className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                First Name
                            </label>
                            <input type="text" name="name" id="name" placeholder="Full Name"
                                   className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Last Name
                            </label>
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                   className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input type="text" name="name" id="name" placeholder="Email Address"
                                   className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                   className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]  focus:shadow-md"/>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Subject
                            Message</label>
                        <textarea id="product-details" rows="6"
                                  className="bg-gray-50 border-[#e0e0e0] focus:border-[#6A64F1] border text-gray-900 sm:text-sm rounded-lg  block w-full p-4 mb-5"
                                  placeholder="Enter Details">

                        </textarea>
                    </div>

                    {/*<div className="mb-5">*/}
                    {/*    <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">*/}
                    {/*        Email Address*/}
                    {/*    </label>*/}
                    {/*    <input type="email" name="email" id="email" placeholder="Enter your email"*/}
                    {/*           className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>*/}
                    {/*</div>*/}
                    {/*<div className="-mx-3 flex flex-wrap">*/}
                    {/*    <div className="w-full px-3 sm:w-1/2">*/}
                    {/*        <div className="mb-5">*/}
                    {/*            <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">*/}
                    {/*                Date*/}
                    {/*            </label>*/}
                    {/*            <input type="date" name="date" id="date"*/}
                    {/*                   className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="w-full px-3 sm:w-1/2">*/}
                    {/*        <div className="mb-5">*/}
                    {/*            <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">*/}
                    {/*                Time*/}
                    {/*            </label>*/}
                    {/*            <input type="time" name="time" id="time"*/}
                    {/*                   className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="mb-5 pt-3">*/}
                    {/*    <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">*/}
                    {/*        Address Details*/}
                    {/*    </label>*/}
                    {/*    <div className="-mx-3 flex flex-wrap">*/}
                    {/*        <div className="w-full px-3 sm:w-1/2">*/}
                    {/*            <div className="mb-5">*/}
                    {/*                <input type="text" name="area" id="area" placeholder="Enter area"*/}
                    {/*                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="w-full px-3 sm:w-1/2">*/}
                    {/*            <div className="mb-5">*/}
                    {/*                <input type="text" name="city" id="city" placeholder="Enter city"*/}
                    {/*                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="w-full px-3 sm:w-1/2">*/}
                    {/*            <div className="mb-5">*/}
                    {/*                <input type="text" name="state" id="state" placeholder="Enter state"*/}
                    {/*                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="w-full px-3 sm:w-1/2">*/}
                    {/*            <div className="mb-5">*/}
                    {/*                <input type="text" name="post-code" id="post-code" placeholder="Post Code"*/}
                    {/*                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div>
                        <button
                            className="hover:shadow-form w-full rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}