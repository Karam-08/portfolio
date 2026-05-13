const ContactForm = () =>{
    return(
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form className="space-y-4" action="mailto:karam.abbas2008@gmail.com ?subject=Contact%20Form%20Submission" method="POST" encType="text/plain">
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className="mt-1 block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"></textarea>
                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm