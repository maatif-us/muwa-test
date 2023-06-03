import React from "react";

import {
  AirbnbLogoSVG,
  AmazonLogoSVG,
  FacebookLogoSVG,
  HubSpotLogoSVG,
  TinderLogoSVG,
} from "../assets/Constants";

function Testimonials() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">
              Trusted by over 20,000 companies all over the world
            </h2>
            <p className="text-xl text-gray-600">
              Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar
              mattis blandit libero cursus mattis.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              {FacebookLogoSVG}
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              {TinderLogoSVG}
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              {AirbnbLogoSVG}
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              {HubSpotLogoSVG}
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
              {AmazonLogoSVG}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
