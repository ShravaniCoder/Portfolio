import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge("w-full overflow-hidden", className)}>
      <div
        className={twMerge(
          "flex py-0.5 gap-6 pr-6 w-max", 
          itemsWrapperClassName
        )}
      >
        {[...Array(2)].map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={`${item.title}-${index}`}
                className="inline-flex  items-center gap-4 py-2 px-3 outline-2 outline-gray-200 rounded-lg"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
