import { useState } from 'react';
import Banner from './banner';
import Image from 'next/image';

function Ecosystem() {
  const [activeSection, setActiveSection] = useState('main');

  const appshide = () => setActiveSection('main');
  const wizardshow = () => setActiveSection('wizard');
  const systemshow = () => setActiveSection('system');
  const rpkshow = () => setActiveSection('rpk');

  return (
    <div className="w-full px-8 md:px-16 lg:px-24">
      {activeSection === 'main' && (
        <div className="md:w-[85%] m-auto lg:grid lg:grid-cols-1 lg:gap-8 extended h-auto lg:w-[85%] py-8 rounded-[0.65em] m-auto">
          <div className="text-off-white m-auto text-left pt-4 pb-4 px-2">
            <h1 className="text-3xl font-bold text-rhino-purple md:text-center">Your experience matters</h1>
            <p className="text-xl py-4">
              Rhino Linux is dedicated to providing the best desktop experience possible. We have carefully created a set of graphical applications and command-line utilities to cater to your everyday needs.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center mt-4 ecosystem-text-down">
              <div>
                <a onClick={wizardshow} className="hover:cursor-pointer hover:text-rhino-purple transition-all text-xl">
                  <Image src="/img/ecosystem/icons/setup-wizard.webp" alt="Setup Wizard" width="200" height="200" className="w-[12vw] md:w-[7vw] mx-auto" />
                  <p className="text-xl">Setup Wizard →</p>
                </a>
              </div>
              <div>
                <a onClick={systemshow} className="hover:cursor-pointer hover:text-rhino-purple transition-all text-xl">
                  <Image src="/img/ecosystem/icons/your-os.webp" alt="Your System" width="200" height="200" className="w-[12vw] md:w-[7vw] mx-auto" />
                  <p className="text-xl">Your System →</p>
                </a>
              </div>
              <div>
                <a onClick={rpkshow} className="hover:cursor-pointer hover:text-rhino-purple transition-all text-xl">
                  <Image src="/img/ecosystem/icons/rpk-logo.webp" alt="rhino-pkg" width="200" height="200" className="w-[12vw] md:w-[7vw] mx-auto" />
                  <p className="text-xl">rhino-pkg →</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Setup Wizard Section */}
      {activeSection === 'wizard' && (
        <Banner
          title="Setup Wizard"
          imageSrc="/img/ecosystem/applications/setup-wizard.png"
          description="When you first boot your system, you will be greeted by our elegant setup wizard, giving you the ability to select your theme, install additional package managers, and install additional software to optimize your experience."
          onBackClick={appshide}
        />
      )}

      {/* Your System Section */}
      {activeSection === 'system' && (
        <Banner
          title="Your System"
          imageSrc="/img/ecosystem/applications/your-os.png"
          description="Your System is a handy graphical application that allows you to view system information at a glance. It also provides a graphical method for updating all of your software packages."
          onBackClick={appshide}
        />
      )}

      {/* Rhino-pkg Section */}
      {activeSection === 'rpk' && (
        <Banner
          title="rhino-pkg"
          imageSrc="/img/ecosystem/applications/rhino-pkg.png"
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
