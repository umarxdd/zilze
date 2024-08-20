function Footer() {
  return (
    <>
      <div className="">
        <div className="flex justify-between bg-pink-200 mt-8 px-8 py-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl mb-4">Contact Us</h1>
            <span>0399854275844</span>
            <span>hay@henlo.com</span>
            <a href="https://instagram.com" className="hover:underline">
              instagram
            </a>
            <a href="https://facebook.com" className="hover:underline">
              facebook
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl mb-4">Policies</h1>
            <span>About Us</span>
            <span>Privacy Policy</span>
            <span>Refund Policy</span>
            <span>Contact</span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl mb-4">Our Devs</h1>
            <a href="https://github.com" className="hover:underline">
              Github
            </a>
            <a href="https://x.com" className="hover:underline">
              Twitter
            </a>
            <a href="https://instagram.com" className="hover:underline">
              instagram
            </a>
            <a href="https://facebook.com" className="hover:underline">
              facebook
            </a>
          </div>
        </div>

        <hr className="border-black" />
        <div className="flex flex-col bg-primary text-center text-white py-6 ">
          <span>Copyright © 2023 Zilze All Rights Reserved</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
