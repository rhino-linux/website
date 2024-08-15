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
        <div key={index} className="p-4 my-4 bg-indigo-950 text-white rounded-lg shadow-md">
            <h3 className="text-2xl">{content.title}</h3>
            <p className="mt-2"><strong>Kernel:</strong> {content.details.kernel}</p>
            <p><strong>Download Mirror:</strong> <a href={content.details.downloadMirror} target="_blank" rel="noopener noreferrer" className="text-rhino-purple underline">{content.details.downloadMirror}</a></p>
            <p><strong>Download Size:</strong> {content.details.downloadSize}</p>
            <p><strong>Source Code:</strong> <a href={content.details.sourceCode} target="_blank" rel="noopener noreferrer" className="text-rhino-purple underline">{content.details.sourceCode}</a></p>
            <button onClick={() => {
                navigator.clipboard.writeText(content.details.shasum);
                alert('SHA256sum copied to clipboard!');
            }} className="my-4 hover:scale-105 transition-all bg-rhino-purple text-white px-4 py-2 rounded-lg shadow-md">Copy SHA256sum</button>
            {content.details.login && (
                <p><strong>Login:</strong> <br /> Username: {content.details.login.username} <br /> Password: {content.details.login.password}</p>
            )}
        </div>
    ));
  };

  return (
    <div className="md:w-[65%] w-full mx-auto md:p-0 p-4">
      <label htmlFor="platform" className="block text-sm font-medium text-white">Select a platform:</label>
      <select
        id="platform"
        value={selectedPlatform}
        onChange={(e) => setSelectedPlatform(e.target.value)}
        className="block w-full mt-2 p-2 bg-indigo-950 text-white text-xl border-2 border-rhino-purple rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="generic">Generic (x86_64/ARM64)</option>
        <option value="pine">Pine64 (ARM64)</option>
        <option value="rpi">Raspberry Pi (ARM64)</option>
      </select>

      <div className="content-display mt-6">
        {renderContent()}
      </div>
      <Banner />
    </div>
  );
};

export default DownloadSelection;
