import FooterLink from "./FooterLink"

const Footer = () => {
  return (<>
      <footer className="bg-white p-4 flex items-center justify-center flex-col">
          <div className="w-full max-w-screen-md mx-auto mb-6 md:grid-cols-3 grid grid-cols-2 gap-4">
              <FooterLink label="Home" path="/" />
              <FooterLink label="Carrers" path="/carrers" />
              <FooterLink label="Contact Us" path="/contact-us" />
              <FooterLink label="About Us" path="/about-us" />
              <FooterLink label="FAQ" path="/faq" />
              <FooterLink label="Terms of Service" path="/terms-of-service" />
              <FooterLink label="Blog" path="/blog" />
              <FooterLink label="Privacy Policy" path="/privacy-policy" />
          </div>
          <div>
              <p className="text-gray-600 font-medium">
                  Copyright© 2024, All rights reserved{" "}
                  <span className="text-primary-500">Redo Developers Inc.</span>
              </p>
          </div>
      </footer></>
  );
}

export default Footer
