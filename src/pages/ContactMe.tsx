import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import A from "components/A";
import DefaultLayout from "components/layouts/DefaultLayout";
import Discord from '../assets/discord.svg'
import Image from "next/image";


const ContactMe = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isBrowseDropdownOpen, setIsBrowseDropdownOpen] = useState(false)

  return (
    <div className="flex flex-col items-center">

      <div className="text-4xl font-bold mb-8">contact me</div>

      <div className="w-full md:px-10 flex flex-col items-center space-y-6">
        <button
          className="text-blue-500 flex items-center "
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? (
            <ChevronUpIcon className="w-5 h-5 ml-2" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          )}
          Discord - text chat me in server
        </button>

        {isDropdownOpen && (
          <div className=" flex flex-col items-center space-y-6 py-6 w-full border-y-4 border-white">
            <div
              onClick={() => {
                window.open('https://discord.com/invite/7kdQcuf', '_blank')
              }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image src={Discord} alt="Discord" width={24} height={24} />
              <div>click here to join Discord</div>
            </div>

            <button
              className="flex items-center "
              onClick={() => setIsBrowseDropdownOpen(!isBrowseDropdownOpen)}
            >
              {isBrowseDropdownOpen ? (
                <ChevronUpIcon className="w-5 h-5 ml-2" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              )}
              click here to browse server before joining
            </button>

            {isBrowseDropdownOpen && (
              <iframe
                src="https://e.widgetbot.io/channels/741856477156737105/741856477156737108?api=65b476eb-8b4f-4105-87fa-6de8c3af3f74"
                width="100%"
                height="600"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            )}
          </div>
        )}

        <span className="text-blue-500">
          <A href="https://calendly.com/shmoji/30min">
            Calendly - schedule call with me
          </A>
        </span>

        <span className="text-blue-500">
          <A href="mailto:shmoji@protonmail.com">
            Email: shmoji@protonmail.com - email me, but i may miss it compared
            to Discord chat
          </A>
        </span>
      </div>
    </div>
  );
};

ContactMe.layoutProps = {
  Layout: DefaultLayout,
};

export default ContactMe;
