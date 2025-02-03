"use client";

export default function PostcardHighlights() {
  // Define speech bubbles as objects with positions, sizes, and text
  const speechBubbles = [
    {
      position: [-60, 0], // Adjusted closer to the top of the postcard
      size: [220, 100],
      text: "Record your memorable date,\ncity, weather & temperature",
    },
    {
      position: [180, 0], // Positioned to the top-right of the postcard
      size: [200, 100],
      text: "Set up a memorial location with a QR code",
    },
    {
      position: [630, 0], // Aligned further to the right of the postcard
      size: [220, 100],
      text: "Choose your own photo as images of stamp and postcard, which is the world's first, out of print except you",
    },
    {
      position: [400, 660], // Positioned to the left side
      size: [260, 100],
      text: "Easily make\nPhysically print\nWorldwide post\nSouvenir\nPhilately\nPhoto print\nA5 big size\nValue for money",
    },
    {
      position: [-60, 660], // Positioned just below the postcard
      size: [200, 100],
      text: "Share your video or audio by scanning the QR code",
    },
    {
      position: [170, 660], // Positioned to the left of the postcard
      size: [210, 100],
      text: "Add a commemorative seal of the country or place you visit",
    },
    {
      position: [400, 0], // Positioned closer to the bottom-right
      size: [210, 100],
      text: "Record the date and get it stamped always on the same day",
    },
    {
      position: [700, 660], // Aligned further left for balance
      size: [220, 100],
      text: "Keep traditional postcard by skipping added features",
    },
  ];

  // Corrected Postcard Position (x first, y second) & Shifted Left by 50px
  const postcardPosition = [30, 120]; // Postcard moved 50px left

  return (
    <div className="container">
      <h1>Create Your World-Unique Postcard</h1>

      {/* Container for Postcard and Speech Bubbles */}
      <div className="canvas">
        {/* Postcard */}
        <div
          className="postcard"
          style={{
            left: `${postcardPosition[0]}px`,
            top: `${postcardPosition[1]}px`,
          }}
        >
          {/* Sections inside the Postcard */}
          <div className="content-box" style={{ top: "20px", left: "20px" }}>
            Title & Date
          </div>
          <div className="content-box" style={{ top: "80px", left: "20px" }}>
            Weather
          </div>
          <div className="content-box" style={{ top: "140px", left: "20px" }}>
            Address
          </div>
          <div className="content-box" style={{ top: "200px", left: "20px" }}>
            Postage
          </div>
          <div className="content-box" style={{ top: "260px", left: "20px" }}>
            Message
          </div>
          <div className="content-box" style={{ top: "20px", right: "20px" }}>
            QR Code
          </div>
          <div className="content-box" style={{ top: "80px", right: "20px" }}>
            Seal
          </div>
          <div
            className="content-box"
            style={{ bottom: "20px", right: "20px" }}
          >
            Signature
          </div>
        </div>

        {/* Speech Bubbles */}
        {speechBubbles.map(
          ({ position: [x, y], size: [width, height], text }, index) => (
            <div
              key={index}
              className="speech-bubble"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                width: `${width}px`,
                height: `${height}px`,
              }}
            >
              {text}
            </div>
          )
        )}
      </div>

      <style jsx>{`
        .container {
          position: relative;
          padding: 24px;
          font-family: Arial, sans-serif;
        }

        h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .canvas {
          position: relative;
          width: 800px;
          height: 600px;
          margin: 0 auto;
        }

        .postcard {
          position: absolute;
          background: white;
          border: 1px solid #d1d5db;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 16px;
          width: 780px; /* 130% of original 600px */
          height: 520px; /* 130% of original 400px */
        }

        .content-box {
          position: absolute;
          background: #bfdbfe;
          border: 1px solid #d1d5db;
          padding: 8px;
          border-radius: 4px;
          font-size: 14px;
        }

        .speech-bubble {
          position: absolute;
          background: #f3f4f6;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 14px;
          transition: border-color 0.2s ease;
        }

        .speech-bubble:hover {
          border-color: red;
        }
      `}</style>
    </div>
  );
}
