import React from 'react';

function ContactForm() {
  return (
    <section>
      <div className="form-container container">
        <form action="https://formspree.io/f/xzbowpjq" method="POST">
          <div className="form">
            <div className="form-txt">
              <h1 className="text-3xl font-medium text-amber-600">Contact Us</h1>
             
              <h3 className="text-xl">India</h3>
            </div>
            <div className="form-details">
              <input type="text" name="name" id="name" placeholder="Name" required className="h-12 w-full mb-4 outline-none rounded-md border-2 border-gray-300 p-3 text-lg" />
              <input type="email" name="email" id="email" placeholder="Email" required className="h-12 w-full mb-4 outline-none rounded-md border-2 border-gray-300 p-3 text-lg" />
              <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required className="h-32 w-full mb-4 outline-none rounded-md border-2 border-gray-300 p-3 text-lg"></textarea>
              <button className="h-12 w-full bg-red-400 text-white rounded-md text-lg">SEND MESSAGE</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-container container flex flex-col md:flex-row justify-between py-8">
        <div className="content_1 md:w-1/3">
          <p className="font-medium">The customer is at the heart of our<br />unique business model, which includes<br />design.</p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>

        <div className="content_3 md:w-1/4">
          <h4 className="text-xl font-medium mb-4">MOVIES</h4>
          <a href="./contact.html" className="block mb-2">Contact Us</a>
          <a href="#" className="block mb-2">Payment Method</a>
        </div>
        <div className="content_4 md:w-1/4">
    
          <p className="mb-4">Be the first to know about new<br />movies</p>
          <hr className="my-4 border-t-2 border-gray-300" />
        </div>
      </div>
      <div className="f-design bg-gray-200">
        <div className="f-design-txt container py-4">
          <p className="text-center text-gray-600">Copyrights @Avinash-Kumar-2023</p>
        </div>
      </div>
    </footer>
  );
}

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <p>
        Greetings, movie enthusiasts! Welcome to our movie haven, where the magic of cinema comes to life. As the creator of this web app, I am thrilled to present to you a curated collection of the latest movies, complete with detailed overviews and essential information.
      </p>
      <p>
        Dive into our extensive movie database, meticulously updated to ensure you stay on the pulse of the film industry. Whether you're searching for a specific title, director, actor, genre, or release date, our website simplifies the process, helping you discover the perfect movie for any occasion. I believe in the power of shared experiences, and that's why we've created a community section where fellow movie lovers can connect. Engage in lively discussions on our forum, read and contribute reviews, and immerse yourself in the collective passion for cinema.
      </p>
      <p>
        Beyond the movies, our platform keeps you in the loop with the latest news and trailers, making it your go-to source for all things cinematic. Thank you for choosing our website as your cinematic companion. Your feedback is invaluable to us, so feel free to reach out with any suggestions or thoughts. We're committed to enhancing your user experience and ensuring your time here is enjoyable. Happy exploring!
      </p>
      <ContactForm />
      <Footer />
    </div>
  );
}
