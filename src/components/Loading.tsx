import { ClimbingBoxLoader } from "react-spinners";

function LoadingS({ loading }: { loading: boolean }) {
  return (
    <div className="sweet-loading">
      <div className="flex justify-center items-center h-screen bg-darknavy w-full">
        <ClimbingBoxLoader color="#64ffda" loading={loading} size={29} />
      </div>
    </div>
  );
}

export default LoadingS;
