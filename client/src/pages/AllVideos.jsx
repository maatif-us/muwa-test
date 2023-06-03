import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useGetAllVideosQuery } from "../features/video/videoApiSlice";

const AllVideos = () => {
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const { data: videos, isLoading } = useGetAllVideosQuery(userInfo?.token, {
    pollingInterval: 60000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  if (!videos) return <div>Missing post!</div>;

  return (
    <>
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">All Videos </h1>
              </div>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Video name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Resolution
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Extension
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Created At
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <>
                        <div>Loading...</div>
                      </>
                    ) : (
                      <>
                        {videos.map((video) => {
                          return (
                            <tr
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                              key={video._id}
                            >
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {video.name}
                              </th>
                              <td className="px-6 py-4">{video.resolution}</td>
                              <td className="px-6 py-4">{video.newExt}</td>
                              <td className="px-6 py-4">{video.createdAt}</td>
                              <td className="px-6 py-4">
                                <button
                                  type="button"
                                  className={
                                    video.url.length > 0
                                      ? "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                      : "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                  }
                                  disabled={video.url.length > 0 ? false : true}
                                  onClick={() => {
                                    navigate(`/video/play/${video._id}`);
                                  }}
                                >
                                  STREAM
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AllVideos;
