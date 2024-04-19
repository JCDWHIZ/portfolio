import React from "react";
import { CiFolderOn } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";

function Archivecard({
  site,
  git1,
  git2,
  sitelink,
  git1link,
  git2link,
  description,
  library,
  name,
}) {
  return (
    <div className="transition-all duration-300 transform hover:-translate-y-3 ">
      <div className="">
        <div className="">
          <div className="">
            <div className="bg-darknavy/40 shadow-xl p-9 w-[320px] rounded-lg h-full hover:bg-darknavy/50">
              <div className="flex justify-between items-center hover:text-green">
                <div className="">
                  <CiFolderOn className="text-green file text-[80px]" />
                </div>
                <div className=" flex items-center gap-3">
                  {git2 ? (
                    <a href={git2link}>
                      <VscGithubAlt className="text-slate hover:text-green text-[30px]" />
                    </a>
                  ) : (
                    ""
                  )}
                  {git1 ? (
                    <a href={git1link}>
                      <VscGithubAlt className="text-slate hover:text-green text-[30px]" />
                    </a>
                  ) : (
                    ""
                  )}
                  {site ? (
                    <a href={sitelink}>
                      <GoLinkExternal className="text-slate hover:text-green text-[30px]" />
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[40px]   ">
                <div className="roboto">
                  <h1 className="font-bold text-lightestslate text-[20px] transition-colors">
                    {name}
                  </h1>
                  <p className="overflow-hidden text-slate h-[300px]">
                    {/* {description < 390
                      ? description.slice(0, 390, "...")
                      : description} */}
                    {description.slice(0, 390)}...
                  </p>
                </div>
                <div className=" ">
                  <ul className="text-slate flex gap-3 items-center text-[13px] flex-wrap leading-[0.8]">
                    {library.map((detail, index) => (
                      <li key={index} className="whitespace-nowrap">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archivecard;
