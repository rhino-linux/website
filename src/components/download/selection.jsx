import { useState } from "react";
import { genericContents, pineContents, rpiContents } from "./downloads";
import Banner from "./banner";

const PLATFORM_MAP = {
  generic: genericContents,
  pine: pineContents,
  rpi: rpiContents,
};

const DEFAULT_DE = {
  generic: "Unicorn",
  rpi: "Unicorn",
  pine: "Lomiri",
};

const DownloadSelection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("generic");
  const [selectedDEs, setSelectedDEs] = useState({});
  const contents = PLATFORM_MAP[selectedPlatform];

  const handleDEChange = (index, de) => {
    setSelectedDEs((prev) => ({
      ...prev,
      [index]: de,
    }));
  };

  return (
    <div className="md:w-[85%] w-full mx-auto md:p-0 p-4">
      <h1 className="text-off-white text-center pt-8 text-3xl drop-shadow-header-drop">
        Download Rhino Linux
      </h1>

      <div className="mx-2">
        <select
          value={selectedPlatform}
          onChange={(e) => {
            setSelectedPlatform(e.target.value);
            setSelectedDEs({});
          }}
          className="p-2 px-4 bg-site-300 w-full text-off-white md:text-2xl font-light rounded-[0.5em] mt-4 select-fix appearance-none"
        >
          <option value="generic">Generic (x86_64 / ARM64)</option>
          <option value="pine">PINE64 (ARM64)</option>
          <option value="rpi">Raspberry Pi (ARM64)</option>
        </select>
      </div>

      <div className="content-display flex-grid">
        {contents.map((content, index) => {
          const availableDEs = Object.keys(content.desktop_environments);
          const selectedDE =
            selectedDEs[index] ||
            DEFAULT_DE[selectedPlatform] ||
            availableDEs[0];
          const details = content.desktop_environments[selectedDE];

          return (
            <div
              key={index}
              className="p-4 my-4 mx-2 bg-site-300 text-white rounded-lg shadow-md col"
            >
              <h3 className="text-2xl mb-2">
                {content.title}
              </h3>
              {availableDEs.length > 1 && (
                <select
                  value={selectedDE}
                  onChange={(e) => handleDEChange(index, e.target.value)}
                  className="mb-3 p-2 bg-site-200 w-full text-off-white rounded-[0.5em] select-fix appearance-none"
                >
                  {availableDEs.map((de) => (
                    <option key={de} value={de}>
                      {de}
                    </option>
                  ))}
                </select>
              )}

              <div className="space-y-2">
                <p>
                  <strong>Snapshot:</strong> {details.version}
                </p>
                <p>
                  <strong>Desktop:</strong> {selectedDE}
                </p>
                <p>
                  <strong>Download Size:</strong> {details.downloadSize}
                </p>
                <p>
                  <strong>Kernel:</strong> <code>{details.kernel}</code>
                </p>
                <p>
                  <a
                    href={details.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rhino-purple underline"
                  >
                    Source Code
                  </a>
                </p>
              </div>

              {details.login && (
                <div className="bg-site-200 rounded-[0.65em] p-2 my-2 w-44">
                  <code>
                    Login: {details.login.username}
                    <br />
                    Password: {details.login.password}
                  </code>
                </div>
              )}

              <button className="mt-4 hover:scale-105 transition-all bg-rhino-purple rounded-[0.65em] text-white text-xl px-4 py-2 shadow-md mr-2">
                <a
                  href={details.downloadMirror}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </button>

              <div className="tooltip inline-block">
                <span
                  className="tooltiptext"
                  id={`${content.title}-${selectedDE}`}
                >
                  Copy to clipboard
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(details.shasum);
                    document.getElementById(
                      `${content.title}-${selectedDE}`
                    ).innerHTML = "Copied to clipboard!";
                  }}
                  onMouseOut={() => {
                    document.getElementById(
                      `${content.title}-${selectedDE}`
                    ).innerHTML = "Copy to clipboard";
                  }}
                  className="my-4 hover:scale-105 transition-all bg-site-100 p-1 rounded-[0.65em] text-white text-sm px-2 py-1 shadow-md"
                >
                  sha256sum
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Banner />
    </div>
  );
};

export default DownloadSelection;
