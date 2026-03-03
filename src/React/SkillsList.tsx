import React, { useState, type ReactNode } from "react";

export type CategoryId = "web" | "ecommerce" | "project" | "aiml";
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
   <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 512"
        className="w-6 h-6 text-[var(--sec)] opacity-70"
        fill="currentColor"
        >
      <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
    </svg>
  ),
  ecommerce: (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path
        d="M96 128C96 92.7 124.7 64 160 64H480C515.3 64 544 92.7 544 128V512C544 547.3 515.3 576 480 576H160C124.7 576 96 547.3 96 512V128ZM352 496C352 478.3 337.7 464 320 464C302.3 464 288 478.3 288 496C288 513.7 302.3 528 320 528C337.7 528 352 513.7 352 496ZM480 128H160V416H480V128Z"
        fill="currentColor"
      />
      <path
        d="M216.26 184C211.683 184 208 187.688 208 192.273C208 196.857 211.683 200.545 216.26 200.545H231.852C233.194 200.545 234.33 201.511 234.571 202.82L252.503 301.507C254.637 313.296 264.894 321.879 276.872 321.879H364.949C369.526 321.879 373.209 318.191 373.209 313.606C373.209 309.022 369.526 305.333 364.949 305.333H276.872C272.879 305.333 269.472 302.472 268.749 298.543L266.993 288.788H371.488C382.089 288.788 391.176 281.239 393.137 270.795L403.807 213.609C405.081 206.819 399.884 200.545 392.965 200.545H250.92L250.782 199.856C249.13 190.687 241.145 184 231.818 184H216.26ZM279.591 366C288.712 366 296.112 358.589 296.112 349.455C296.112 340.32 288.712 332.909 279.591 332.909C270.47 332.909 263.07 340.32 263.07 349.455C263.07 358.589 270.47 366 279.591 366ZM356.688 366C365.809 366 373.209 358.589 373.209 349.455C373.209 340.32 365.809 332.909 356.688 332.909C347.567 332.909 340.167 340.32 340.167 349.455C340.167 358.589 347.567 366 356.688 366Z"
        fill="currentColor"
      />
    </svg>
  ),
  project: (
    <svg xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 640 640"
         fill="currentColor"  
         className="w-6 h-6 text-[var(--sec)] opacity-70"
         >
      <path d="M197.8 100.3C208.7 107.9 211.3 122.9 203.7 133.7L147.7 213.7C143.6 219.5 137.2 223.2 130.1 223.8C123 224.4 116 222 111 217L71 177C61.7 167.6 61.7 152.4 71 143C80.3 133.6 95.6 133.7 105 143L124.8 162.8L164.4 106.2C172 95.3 187 92.7 197.8 100.3zM197.8 260.3C208.7 267.9 211.3 282.9 203.7 293.7L147.7 373.7C143.6 379.5 137.2 383.2 130.1 383.8C123 384.4 116 382 111 377L71 337C61.6 327.6 61.6 312.4 71 303.1C80.4 293.8 95.6 293.7 104.9 303.1L124.7 322.9L164.3 266.3C171.9 255.4 186.9 252.8 197.7 260.4zM288 160C288 142.3 302.3 128 320 128L544 128C561.7 128 576 142.3 576 160C576 177.7 561.7 192 544 192L320 192C302.3 192 288 177.7 288 160zM288 320C288 302.3 302.3 288 320 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L320 352C302.3 352 288 337.7 288 320zM224 480C224 462.3 238.3 448 256 448L544 448C561.7 448 576 462.3 576 480C576 497.7 561.7 512 544 512L256 512C238.3 512 224 497.7 224 480zM128 440C150.1 440 168 457.9 168 480C168 502.1 150.1 520 128 520C105.9 520 88 502.1 88 480C88 457.9 105.9 440 128 440z"/>
    </svg>
  ),
  aiml: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.3 24.6-55 54.7-56l.3-128C87 2.5 90.5 0 94.6 0H184zM328 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2c-18.2-6.3-30.8-22.1-32.4-40.2C165.4 367.4 144 338.2 144 304c0-31.9 18.7-59.5 45.8-72.3C181.1 220.8 176 207 176 192c0-30.3 24.6-55 54.7-56l.3-128C231 2.5 234.5 0 238.6 0H328z"/>
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
