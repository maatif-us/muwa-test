import { forwardRef, useEffect, useRef, useState } from "react";
import { usePlyr } from "plyr-react";
import "plyr/dist/plyr.css";
import Options from "plyr";
import Hls from "hls.js";
import { useSelector } from "react-redux";

const videoOptions = null;
const videoSource = null;

const useHls = (src, options) => {
  const { userInfo } = useSelector((state) => state.auth);

  const hls = useRef(
    new Hls({
      xhrSetup: (xhr) => {
        xhr.setRequestHeader("x-auth-token", userInfo.token);
      },
    })
  );
  const hasQuality = useRef(false);
  const [plyrOptions, setPlyrOptions] = useState(options);

  useEffect(() => {
    hasQuality.current = false;
  }, [options]);

  useEffect(() => {
    hls.current.loadSource(src);
    // NOTE: although it is more reactive to use the ref, but it seems that plyr wants to use the old as lazy process
    hls.current.attachMedia(document.querySelector(".plyr-react"));
    /**
     * You can all your custom event listener here
     * For this example we iterate over the qualities and pass them to plyr player
     * ref.current.plyr.play() ❌
     * console.log.bind(console, 'MANIFEST_PARSED') ✅
     * NOTE: you can only start play the audio here
     * Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.
     */
    hls.current.on(Hls.Events.MANIFEST_PARSED, () => {
      if (hasQuality.current) return;

      const levels = hls.current.levels;

      const availableQualities = () => {
        const qualityOptions = levels.map((level) => level.height);
        qualityOptions.unshift("Auto");
        return qualityOptions;
      };

      const quality = {
        default: "Auto",
        options: availableQualities(),
        forced: true,
        onChange: (newQuality) => {
          console.log("changes", newQuality);

          if (newQuality === "Auto") {
            hls.current.currentLevel = -1;
          } else {
            levels.forEach((level, levelIndex) => {
              if (level.height === newQuality) {
                hls.current.currentLevel = levelIndex;
              }
            });
          }
        },
      };
      setPlyrOptions({ ...plyrOptions, quality });
      hasQuality.current = true;
    });
  });

  return { options: plyrOptions };
};

/** `CustomPlyrInstance` is a custom React component that renders a video player using the Plyr library
and supports HLS video streaming. It is created using the `React.forwardRef` function, which allows
the component to receive a `ref` to the player instance as a prop. */
const CustomPlyrInstance = forwardRef(function (props, ref) {
  const { source, options = null, hlsSource } = props;
  const raptorRef = usePlyr(ref, {
    ...useHls(hlsSource, options),
    source,
  });
  return <video ref={raptorRef} className="plyr-react plyr" />;
});

/**  The `HLSVideoPlayer` is a functional component that renders a video player using the Plyr library and
supports HLS video streaming. If it is supported, it renders the `CustomPlyrInstance` component passing in the `ref`,
`source`, `options`, and `hlsSource` props. If HLS is not supported, it renders a message saying so. */
const HLSVideoPlayer = ({ videoSrc }) => {
  const ref = useRef(null);
  const supported = Hls.isSupported();

  return (
    <div className="wrapper">
      {supported ? (
        /**  `<CustomPlyrInstance>` is a custom React component that renders a video player using the
        Plyr library and supports HLS video streaming. It takes in several props: */
        <CustomPlyrInstance
          ref={ref}
          source={videoSource}
          options={videoOptions}
          hlsSource={videoSrc}
        />
      ) : (
        "HLS is not supported in your browser"
      )}
    </div>
  );
};

export default HLSVideoPlayer;
