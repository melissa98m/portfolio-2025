import React, { useState, type ReactNode } from "react";

export type CategoryId = "web" | "ecommerce" | "project";
export type Category = {
  id: CategoryId;
  title: string;
  items: string[];
};
type Props = {
  title: string;
  categories: Category[];
};

const CategoryIcons: Record<CategoryId, ReactNode> = {
  web: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" />
    </svg>
  ),
  ecommerce: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g data-name="12 site" id="_12_site">
          {" "}
          <path d="M17.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,17.5,9.08Z"></path>{" "}
          <path d="M11.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,11.5,9.08Z"></path>{" "}
          <path d="M23.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,23.5,9.08Z"></path>{" "}
          <path d="M58.5,3.5H5.5a2.006,2.006,0,0,0-2,2v53a2.006,2.006,0,0,0,2,2h53a2.006,2.006,0,0,0,2-2V5.5A2.006,2.006,0,0,0,58.5,3.5Zm0,55H5.5V14.67h53Zm0-45.83H5.5V5.5h53Z"></path>{" "}
          <path d="M56.21,9.91a1,1,0,0,1-.01,1.41.96.96,0,0,1-.7.29.976.976,0,0,1-.71-.3l-.79-.8-.79.8a.976.976,0,0,1-.71.3.96.96,0,0,1-.7-.29,1,1,0,0,1-.01-1.41l.81-.83-.81-.82a1.008,1.008,0,0,1,.01-1.42,1,1,0,0,1,1.41.01l.79.81.79-.81a1,1,0,0,1,1.41-.01,1.008,1.008,0,0,1,.01,1.42l-.81.82Z"></path>{" "}
          <path d="M49.5,9.08a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h4A1,1,0,0,1,49.5,9.08Z"></path>{" "}
          <path d="M20.15,42.89l3.63-2.09H41.45A2.889,2.889,0,0,0,44,39.24l5.67-10.71a3.089,3.089,0,0,0-.22-3.22l-.72-1.02a2.906,2.906,0,0,0-2.34-1.22h-.01l-23.57.06-.15-1.54a3.084,3.084,0,0,0-3.03-2.81H13.98a1,1,0,0,0,0,2h5.65a1.09,1.09,0,0,1,1.04,1.02l1.78,17.46-3.37,1.95a3.158,3.158,0,0,0-1.34,2.6v.28a3.113,3.113,0,0,0,2.83,3.13,4.653,4.653,0,0,0-.78,2.59,4.408,4.408,0,1,0,8.81,0,4.684,4.684,0,0,0-.77-2.57H36.9a4.6,4.6,0,0,0-.77,2.57,4.408,4.408,0,1,0,8.81,0,4.684,4.684,0,0,0-.77-2.57h1.81a1,1,0,0,0,0-2H20.79a1.107,1.107,0,0,1-1.05-1.15v-.28A1.211,1.211,0,0,1,20.15,42.89ZM42.24,38.3a.915.915,0,0,1-.79.5H24.41L23.38,28.66l23.96-.01Zm4.14-13.23h.01a.87.87,0,0,1,.71.38l.73,1.02c.03.05.06.11.09.17l-24.75.02-.15-1.53ZM40.53,47.24a2.581,2.581,0,1,1-2.4,2.57A2.494,2.494,0,0,1,40.53,47.24Zm-16.34,0a2.581,2.581,0,1,1-2.4,2.57A2.494,2.494,0,0,1,24.19,47.24Z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  ),
  project: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >

      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998Z" />
    </svg>
  ),
};

const SkillsList: React.FC<Props> = ({ title, categories }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const toggleItem = (id: string) => setOpenItem(openItem === id ? null : id);

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        {title}
      </h3>

      <ul className="space-y-4 mt-4 text-lg">
        {categories.map((cat) => (
          <li key={cat.id} className="w-full">
            <div
              onClick={() => toggleItem(cat.id)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[cat.id]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {cat.title}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === cat.id ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M12 13.171l4.95-4.95 1.414 1.414L12 16l-6.364-6.364L7.05 8.22 12 13.17z" />
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === cat.id
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="pl-1">•</span>
                      <span className="pl-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
