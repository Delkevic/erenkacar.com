import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1017",
        }}
      >
        <svg
          width="132"
          height="152"
          viewBox="0 0 40 46"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 2.5C30.8 2.5 37 6.9 37 15.2c0 9.7-8.8 21.2-17 28.3C11.8 36.4 3 24.9 3 15.2 3 6.9 9.2 2.5 20 2.5Z"
            fill="#16212d"
            stroke="#70b6ab"
            strokeWidth="1.4"
          />
          <path
            data-initials="EK"
            d="M12.5 16.5v13m0-13h6m-6 6.5h5m-5 6.5h6M22 16.5v13m0-6.5 6-6.5M22 23l6 6.5"
            fill="none"
            stroke="#f3f0e9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </div>
    ),
    size,
  );
}
