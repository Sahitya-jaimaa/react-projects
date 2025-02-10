import React from "react";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import Testimonial from "./components/Testimonial";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Statistics />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              name="Jefferson Rodrigo Bauer"
              role="Clients Relations Manager at Celepar"
              img="/images/img-impact-2.png"
              text="Supported by a set of task management, analysis and information sharing tools, we've been able to create workflows for communications and approvals of internal processes, generating increased productivity."
            />
            <Testimonial
              name="Thai Binh Ho"
              role="Manager at Survival Skills Vietnam"
              img="/images/img-impact-3.png"
              text="Bitrix24 has helped our whole team to collaborate on a single feature-packed platform without the pain to switch from one software to another."
            />
            <Testimonial
              name="Üwen Ergün"
              role="CEO of KinderRechteForum LLC"
              img="/images/react-projects.png"
              text="Bitrix24 CRM is an excellent tool for improving interaction with your customers, as it includes instruments for creating reports and analyzing sales and marketing campaigns, so that you can gain a clear insight into your company's results and know whether or not your efforts are paying off."
            />
          </div>

          {/* Button Section */}
          <div className="text-center mt-8">
            <button
              style={{ backgroundColor: "#00aeef" }} // Corrected style prop
              className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 hover:bg-purple-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95"
            >
              See more success stories
            </button>
          </div>
        </div>
      </section>
      <Registration />
      <Footer />
    </>
  );
}

export default App;
