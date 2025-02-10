import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00aeef] text-white p-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-2">BITRIX24</h3>
          <ul className="space-y-1">
            <li>Product</li>
            <li>Pricing</li>
            <li>Media kit</li>
            <li>In the press</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">SUPPORT</h3>
          <ul className="space-y-1">
            <li>Helpdesk</li>
            <li>Webinars</li>
            <li>How-to videos</li>
            <li>Contact support</li>
            <li>Schedule a demo</li>
            <li>Status</li>
            <li>Courses</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">RESOURCES</h3>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Articles</li>
            <li>Solutions</li>
            <li>Testimonials</li>
            <li>Alternatives</li>
            <li>Uses</li>
            <li>Resources</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">ON-PREMISE</h3>
          <ul className="space-y-1">
            <li>On-premise edition</li>
            <li>Download</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">COMPARE TO</h3>
          <ul className="space-y-1">
            <li>Asana</li>
            <li>Clickup</li>
            <li>Monday</li>
            <li>Zoho</li>
            <li>Trello</li>
            <li>Hubspot</li>
            <li>Microsoft Project</li>
            <li>Deskera</li>
            <li>Sharepoint</li>
            <li>Odoo</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">APPS</h3>
          <ul className="space-y-1">
            <li>Market</li>
            <li>Mobile app</li>
            <li>Desktop app</li>
            <li>API/developers</li>
            <li>Google API Services</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">PARTNERS</h3>
          <ul className="space-y-1">
            <li>Find a partner</li>
            <li>Become a partner</li>
            <li>Partner login</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-white pt-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-white">
              LEGAL
            </a>
            <a href="#" className="text-white">
              TERMS
            </a>
            <a href="#" className="text-white">
              PRIVACY
            </a>
            <a href="#" className="text-white">
              GDPR
            </a>
            <a href="#" className="text-white">
              SECURITY
            </a>
            <a href="#" className="text-white">
              ABUSE
            </a>
            <a href="#" className="text-white">
              DO NOT SELL OR SHARE MY INFORMATION
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#">
              <img
                src="images/app.png"
                alt="Download on the App Store"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="images/google.png"
                alt="Get it on Google Play"
                className="h-8"
              />
            </a>
            <input
              type="text"
              className="p-2 rounded border border-gray-300"
              placeholder="Search..."
            />
          </div>
        </div>
        <p className="text-white mb-4 text-center">© 2025 Bitrix24</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
