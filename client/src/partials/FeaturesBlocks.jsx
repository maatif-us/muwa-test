import React from "react";
import {
  FeatureBlockSVGArrow,
  FeatureBlockSVGCards,
  FeatureBlockSVGCommunication,
  FeatureBlockSVGHotspot,
  FeatureBlockSVGMobile,
  FeatureBlockSVGStars,
} from "../assets/Constants";

function FeaturesBlocks() {
  return (
    <section className="relative" id="Services">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">How our Service works</h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {FeatureBlockSVGArrow}

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Initial Contact
              </h4>
              <p className="text-gray-600 text-center">
                You upload your video file in any of your desired file format
                and resolution.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {FeatureBlockSVGHotspot}

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Upload Queues
              </h4>
              <p className="text-gray-600 text-center">
                After selecting your quality and format you can submit your file
                for transcoding.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {FeatureBlockSVGCommunication}

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Security
              </h4>
              <p className="text-gray-600 text-center">
                All the routes you visit are secure and private. JWT
                Authentication is implemented using Passport
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {FeatureBlockSVGMobile}

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Fast Prototyping
              </h4>
              <p className="text-gray-600 text-center">
                Job Queues are run in the background to handle the transcoding
                and HLS processing.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {FeatureBlockSVGCards}

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Design Phase
              </h4>
              <p className="text-gray-600 text-center">
                The user can view any of his uploaded files in the dashboard,
                with their metadata.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {FeatureBlockSVGStars}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Develop & Launch
              </h4>
              <p className="text-gray-600 text-center">
                All your videos are available to stream using state of the art
                HLS Adaptive Bitrate Streaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
