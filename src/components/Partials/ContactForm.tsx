import Input from "../common/Input"

const ContactForm = () => {
    const isLoading=false
  return (
      <div className="max-w-xl py-16 mx-auto">
          <form method="post" className="grid grid-cols-1 gap-6">
              <Input
                  id="name"
                  disabled={isLoading}
                  name="name"
                  label="Your Name"
                  type="text"
              />
              <Input
                  id="email"
                  disabled={isLoading}
                  name="email"
                  label="Your Email Address"
                  type="email"
              />

              <textarea
                  id="message"
                  rows={4}
                  className="block focus:ring-primary-500 p-2.5 w-full text-sm text-gray-900 bg-white rounded border border-gray-300  focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your Message"
              ></textarea>
                <div>
              <button disabled={isLoading} className="bg-primary-600 hover:bg-primary-600/90   px-5 py-2 text-white" type="submit">
                  Send
                  </button>
                  </div>
          </form>
      </div>
  );
}

export default ContactForm
