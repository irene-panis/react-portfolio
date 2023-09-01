/* eslint-disable react/no-unescaped-entities */
export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="contact flex flex-col gap-5 w-1/3">
      <h2 className="text-2xl">Let's chat!</h2>
      <form id="contact-form" className="flex flex-col gap-5" action="process.php" method="post" onSubmit={handleSubmit}>

        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="rounded-lg text-black pl-2" name="name" required />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" className="rounded-lg text-black pl-2" name="email" required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Message:</label>
          <textarea id="message" className="rounded-lg text-black pl-2" name="message" rows="4" required></textarea>
        </div>
        
        <input type="submit" value="Submit" className="bg-white text-black w-1/5 rounded-lg font-bold hover:bg-black hover:text-white py-1"/>
      </form>
      <div className="flex flex-col">
        <span>Phone: 949 923 8622</span>
        <span>Email: irenempanis@gmail.com</span>
      </div>
    </div>
  );
}