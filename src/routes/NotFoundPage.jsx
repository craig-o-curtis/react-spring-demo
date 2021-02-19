import { ReactComponent as NotFoundSvg } from "../svg/not-found.svg";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ flex: "0 1 50%" }}>
        <NotFoundSvg />
      </div>
    </div>
  );
};

export default NotFound;
