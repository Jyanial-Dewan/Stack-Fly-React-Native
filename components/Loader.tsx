import LoaderKit from "react-native-loader-kit";

const Loader = () => {
  return (
    // Default values shown
    <LoaderKit
      style={{ width: 50, height: 50 }}
      name={"BallPulse"} // Optional: see list of animations below
      color={"red"} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
    />
  );
};

export default Loader;
