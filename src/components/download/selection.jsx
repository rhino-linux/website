import { useState } from 'react';
import { genericContents, pineContents, rpiContents } from './downloads';
import Banner from './banner';

const DownloadSelection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('generic');
  
  // Function to render content based on selected platform
  const renderContent = () => {
    let contentArray = [];

    if (selectedPlatform === 'generic') {
      contentArray = genericContents;
    } else if (selectedPlatform === 'pine') {
      contentArray = pineContents;
    } else if (selectedPlatform === 'rpi') {
      contentArray = rpiContents;
    }

    return contentArray.map((content, index) => (
        <div key={index} className="p-4 my-4 mx-2 bg-site-300 text-white rounded-lg shadow-md col">
            <h3 className="text-2xl mb-2">{content.title}</h3>
            <p><strong>Download Size:</strong> {content.details.downloadSize}</p>
            <p className="mt-2"><strong>Kernel:</strong> <code>{content.details.kernel}</code></p>
            <p className="mt-2"><a href={content.details.sourceCode} target="_blank" rel="noopener noreferrer" className="text-rhino-purple underline">Source Code</a></p>
            {content.details.login && (
                <div className="bg-site-200 rounded-[0.65em] p-2 my-2 w-40">
                <code>Login: {content.details.login.username} <br /> Password: {content.details.login.password} <br /></code>
                </div>
            )}
            <button className="mt-4 hover:scale-105 transition-all bg-rhino-purple rounded-[0.65em] text-white text-xl px-4 py-2 shadow-md mr-2"><a href={content.details.downloadMirror} target="_blank" rel="noopener noreferrer">Download</a></button>
            <div className="tooltip">
              <span className="tooltiptext" id={content.title}>Copy to clipboard</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(content.details.shasum);
                  document.getElementById(content.title).innerHTML = "Copied to clipboard!";
                }}
                onMouseOut={() => {
                  document.getElementById(content.title).innerHTML = "Copy to clipboard";
                }}
             className="my-4 hover:scale-105 transition-all bg-site-100 p-1 rounded-[0.65em] text-white text-sm px-2 py-1 shadow-md">sha256sum</button>
            </div>
        </div>
    ));
  };

  return (
    <div className="md:w-[85%] w-full mx-auto md:p-0 p-4">
      <h1 className="text-off-white text-center pt-8 text-3xl drop-shadow-header-drop">
        Download Rhino Linux
      </h1>
      <h2 className="text-off-white text-center text-2xl font-light mt-2 drop-shadow-header-drop">
        Version <b><b>2024.2</b></b>
      </h2>
      <div className="mx-2">
        <select
          id="platform"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="p-2 px-4 bg-site-300 w-[100%] text-off-white text-2xl font-light rounded-[0.5em] mt-4 appearance-none"
        >
          <option value="generic">Generic (x86_64/ARM64)</option>
          <option value="pine">Pine64 (ARM64)</option>
          <option value="rpi">Raspberry Pi (ARM64)</option>
        </select>
      </div>

      <div className="content-display mt-6 flex-grid">
        {renderContent()}
      </div>
      <Banner />
    </div>
  );
};

export default DownloadSelection;