import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

type SocialCardOptions = {
  title: string;
  label: string;
  accent?: string;
  supportingLine?: string;
};

export function createSocialImage({
  title,
  label,
  accent = "#70b6ab",
  supportingLine = "Desktop · Web · Real-time systems",
}: SocialCardOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          overflow: "hidden",
          background: "#0a1017",
          color: "#f3f0e9",
          padding: "68px 76px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            display: "flex",
            border: "1px solid #273442",
            borderRadius: 18,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 76,
            width: 210,
            height: 3,
            display: "flex",
            background: accent,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <svg
            width="54"
            height="62"
            viewBox="0 0 40 46"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 2.5C30.8 2.5 37 6.9 37 15.2c0 9.7-8.8 21.2-17 28.3C11.8 36.4 3 24.9 3 15.2 3 6.9 9.2 2.5 20 2.5Z"
              fill="#16212d"
              stroke={accent}
              strokeWidth="1.2"
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
          <div
            style={{
              display: "flex",
              color: "#adb7c2",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Eren Kaçar · Portfolio
          </div>
        </div>

        <div
          data-social-card-content
          style={{
            position: "absolute",
            top: 220,
            right: 76,
            left: 76,
            display: "flex",
            maxWidth: 980,
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              color: accent,
              fontSize: label.length > 32 ? 21 : 24,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: title.length > 18 ? 78 : 96,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              lineHeight: 1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              color: "#adb7c2",
              fontSize: 30,
            }}
          >
            {supportingLine}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 76,
            bottom: 68,
            left: 76,
            display: "flex",
            justifyContent: "space-between",
            color: "#96a2ae",
            fontSize: 20,
          }}
        >
          <span>{siteConfig.displayDomain}</span>
          <span>Desktop · Web · Real-time systems</span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
