import { useState } from "react";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useUploadVideoMutation } from "../features/video/videoApiSlice";
import {
  VideoCodecOptions,
  VideoFileExtensions,
  VideoResolutionQualityOptions,
} from "../assets/Constants";

import FilesDragAndDrop from "../components/FilesDragAndDrop";

const Home = () => {
  const [uploadVideo, { isLoading }] = useUploadVideoMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedResolution, setSelectedResolution] = useState("720");
  const [selectedExtension, setSelectedExtension] = useState("mp4");

  const handleFileUpload = (file) => {
    if (!file) {
      toast.error("Error uploading file");
      return;
    }
    setUploadedFile(file);
  };

  const handleSubmit = async () => {
    if (!uploadedFile) {
      toast.error("File not found! Please upload a new file");
      return;
    }
    toast.info("Uploading...", { autoClose: 2000 });

    const resolution = `${selectedResolution}x?`;
    const extension = selectedExtension;

    const videoFormData = new FormData();

    videoFormData.append("video", uploadedFile);
    videoFormData.append("newExt", extension);
    videoFormData.append("resolution", resolution);

    const token = userInfo.token;

    const videoData = { videoFormData, token };

    const res = await uploadVideo(videoData);

    toast.success("Upload Successful!!!");
    toast.info("Please wait for the file to finish encoding", {
      autoClose: 5000,
    });
  };

  return (
    <>
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome </h1>
              </div>
              <div className="max-w-sm mx-auto">
                <FilesDragAndDrop
                  onFileUpload={handleFileUpload}
                  formats={VideoFileExtensions}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-x-6 my-3">
                <span className="mr-8">Choose Output Video Resolution</span>

                {VideoResolutionQualityOptions.map((quality) => (
                  <div key={quality} className="flex">
                    <input
                      type="radio"
                      name="hs-radio-group-1"
                      className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id={`hs-radio-group-${quality}`}
                      value={quality}
                      checked={selectedResolution === quality}
                      onChange={(e) => setSelectedResolution(e.target.value)}
                    />
                    <label
                      htmlFor={`hs-radio-group-${quality}`}
                      className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                    >
                      {quality}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-x-6 my-3">
                <span className="mr-8">Choose Output Video Extension</span>
                {VideoCodecOptions.map((ext) => (
                  <div key={ext} className="flex">
                    <input
                      type="radio"
                      name="hs-radio-group-2"
                      className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id={`hs-radio-group-${ext}`}
                      value={ext}
                      checked={selectedExtension === ext}
                      onChange={(e) => setSelectedExtension(e.target.value)}
                    />
                    <label
                      htmlFor={`hs-radio-group-${ext}`}
                      className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                    >
                      {ext}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center my-20">
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
