import formBackground from "../../assets/bb.jpg"

export default function Contact() {
  return (
      <form action="https://formbold.com/s/FORM_ID" method="POST" style={{ backgroundImage: `url(${formBackground})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}
            className="grid grid-cols-1 gap-6 md:gap-8 mx-auto bg-white items-center w-full py-10  px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="firstname" className="text-gray-300 text-xl font-semibold mb-2">First
              Name</label>
            <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Jane"
                className="border-b text-gray-300 bg-transparent border-gray-300 focus:border-yellow-500 focus:outline-none p-2 text-lg font-medium placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastname" className="text-gray-300 text-xl font-semibold mb-2">Last Name</label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Cooper"
                className="border-b bg-transparent border-gray-300 focus:border-yellow-500 focus:outline-none p-2 text-lg font-medium text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 text-xl font-semibold mb-2">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                className="border-b border-gray-300 bg-transparent focus:border-yellow-500 focus:outline-none p-2 text-lg font-medium text-gray-800 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 text-xl font-semibold mb-2">React Out</label>
            <input
                type="text"
                name="message"
                id="message"
                placeholder="Subject Message"
                className="border-b border-gray-300 bg-transparent focus:border-yellow-500 focus:outline-none p-2 text-lg font-medium text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 text-xl font-semibold mb-2">Message</label>
            <textarea
                rows="6"
                name="message"
                id="message"
                placeholder="Write your message..."
                className="border-b bg-transparent border-gray-300 focus:border-yellow-500 focus:outline-none p-2 text-lg font-medium text-gray-800 placeholder-gray-500 resize-none"
            ></textarea>
          </div>

        </div>

        <div className="w-full flex justify-center">
          <button type="submit" className="w-full md:max-w-lg mt-6 bg-black text-white p-3 rounded-full">
            Send Message
          </button>
        </div>
      </form>
  )
}