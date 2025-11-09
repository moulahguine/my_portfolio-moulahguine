export default function ClipPathUnits() {
  return (
    <>
      <svg width="0" height="0" aria-hidden="true">
        <clipPath id="aboutContent" clipPathUnits="objectBoundingBox">
          <path
            d="
        M 0,0.3076923
        A 0.0298507,0.0512820 0 0 1 0.0298507,0.2564103
        L 0.4477612,0.2564103
        A 0.0298507,0.0512820 0 0 0 0.4776119,0.2051282
        L 0.4776119,0.0512820
        A 0.0298507,0.0512820 0 0 1 0.5074627,0
        L 0.9701493,0
        A 0.0298507,0.0512820 0 0 1 1,0.0512820
        L 1,0.5128205
        A 0.0298507,0.0512820 0 0 1 0.9701493,0.5641025
        L 0.5223880,0.5641025
        A 0.0298507,0.0512820 0 0 0 0.4925373,0.6153846
        L 0.4925373,0.9487179
        A 0.0298507,0.0512820 0 0 1 0.4626866,1
        L 0.0298507,1
        A 0.0298507,0.0512820 0 0 1 0,0.9487179
        Z
      "
          />
        </clipPath>
      </svg>
      {/* for container in desktop */}

      <svg width="0" height="0">
        <clipPath id="heroContainerShape" clipPathUnits="objectBoundingBox">
          <path
            d="
            M 0,0
            L 0.5,0
            A 0.0214286,0.0333333 0 0 1 0.5142857,0.0222222
            L 0.5142857,0.1777778
            A 0.0142857,0.0222222 0 0 0 0.5285714,0.2
            L 0.9857143,0.2
            A 0.0142857,0.0222222 0 0 1 1,0.2222222
            L 1,1
            L 0,1
            L 0,0
            Z
            "
          />
        </clipPath>
      </svg>

      {/* for container in mobile */}

      <svg width="0" height="0" aria-hidden="true">
        <clipPath id="customShape" clipPathUnits="objectBoundingBox">
          <path
            d="
      M 0,0
      L 0.8,0
      A 0.04,0.04 0,0,1 0.83636363,0.025
      L 0.83636363,0.225
      A 0.04,0.04 0,0,0 0.8727272,0.25
      L 0.98 , 0.25
      A 0.04,0.04 0,0,1 1,0.275
      L 1,1
      L 0,1
      Z
    "
          />
        </clipPath>
      </svg>

      {/* for hero image in desktop */}

      <svg width="0" height="0" aria-hidden="true">
        <clipPath id="heroImageShape" clipPathUnits="objectBoundingBox">
          <path
            d="
      M 0,0.2285714
      A 0.0289855,0.0285714 0 0 1 0.0289855,0.2
      L 0.0579710,0.2
      A 0.0289855,0.0285714 0 0 0 0.0869565,0.1714286
      L 0.0869565,0.1428571
      L 0.0869565,0.0285714
      A 0.0289855,0.0285714 0 0 1 0.1159420,0
      L 1,0
      L 1,1
      L 0,1
      Z
    "
          />
        </clipPath>
      </svg>

      {/* for hero image in mobile */}

      <svg width="0" height="0" aria-hidden="true">
        <clipPath id="heroImageShapeMobile" clipPathUnits="objectBoundingBox">
          <path
            d="
      M 0,0
      L 1,0
      L 1,1
      L 0,1
      L 0,220
      A 30,30 0 0 0 20,200
      L 20,100
      A 30,30 0 0 0 0,80
      L 0,0
      Z
    "
          />
        </clipPath>
      </svg>
    </>
  );
}
