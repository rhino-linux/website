import { useState } from 'react';
import Banner from './banner';

function Ecosystem() {
  const [activeSection, setActiveSection] = useState('main');

  const appshide = () => setActiveSection('main');
  const wizardshow = () => setActiveSection('wizard');
  const systemshow = () => setActiveSection('system');
  const rpkshow = () => setActiveSection('rpk');

  return (
    <div className="w-full px-8 md:px-16 lg:px-24">
      {activeSection === 'main' && (
        <div className="extended h-auto lg:w-[85%] py-12 rounded-[0.65em] m-auto animate-slide-in">
          <div className="text-off-white m-auto text-left pt-4 pb-4 px-2">
            <h1 className="text-6xl font-bold text-rhino-purple md:text-center">Your experience matters.</h1>
            <p className="text-2xl py-4">
              Rhino Linux is dedicated to providing the best desktop experience possible. We have carefully created a set of graphical applications and command-line utilities to cater to your everyday needs.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center mt-4">
              <div>
                <img src="/img/ecosystem/icons/setup-wizard.webp" alt="Setup Wizard" className="md:w-[25%] w-full mx-auto" />
                <a onClick={wizardshow} className="hover:cursor-pointer hover:text-rhino-purple transition-all text-2xl">Setup Wizard →</a>
              </div>
              <div>
                <img src="/img/ecosystem/icons/your-os.webp" alt="Your System" className="md:w-[25%] w-full mx-auto" />
                <a onClick={systemshow} className="hover:cursor-pointer hover:text-rhino-purple transition-all text-2xl">Your System →</a>
              </div>
              <div>
                <img src="/img/ecosystem/icons/rpk-logo.webp" alt="rhino-pkg" className="md:w-[25%] w-full mx-auto" />
                <a onClick={rpkshow} className="hover:cursor-pointer hover:text-rhino-purple transition-all text-2xl">rhino-pkg →</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Setup Wizard Section */}
      {activeSection === 'wizard' && (
        <Banner
          title="Setup Wizard"
          imageSrc="/img/ecosystem/applications/setup-wizard.webp"
          description="When you first boot your system, you will be greeted by our elegant setup wizard, giving you the ability to select your theme, install additional package managers, and install additional software to optimize your experience."
          onBackClick={appshide}
        />
      )}

      {/* Your System Section */}
      {activeSection === 'system' && (
        <Banner
          title="Your System"
          imageSrc="/img/ecosystem/applications/your-os.webp"
          description="Your System is a handy graphical application that allows you to view system information at a glance. It also provides a graphical method for updating all of your software packages."
          onBackClick={appshide}
        />
      )}

      {/* Rhino-pkg Section */}
      {activeSection === 'rpk' && (
        <Banner
          title="rhino-pkg"
          imageSrc="/img/ecosystem/applications/rhino-pkg.webp"
          description="Our flagship package management wrapper, rhino-pkg, makes life easy by allowing you to install, remove, and update applications across all package managers and repositories. With easy-to-understand syntax and our handy guide, you’ll have all of your favorite apps in seconds."
          onBackClick={appshide}
        />
      )}

      {/* RhinoDrop Section */}
      {activeSection === 'rhinodrop' && (
        <Banner
          title="RhinoDrop"
          imageSrc="/img/apps/rhinodrop.webp"
          description="RhinoDrop allows easy file sharing across devices."
          onBackClick={appshide}
        />
      )}
    </div>
  );
}

export default Ecosystem;
