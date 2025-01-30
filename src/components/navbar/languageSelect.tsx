"use client";

import React, { useCallback, useMemo } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { HiGlobeAlt } from "react-icons/hi";

import { pathnames } from "../../../locales/routes";

import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

interface SelectOptionProps {
  value: string;
  active: boolean;
  updateValue: (value: string) => void;
  className?: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  name?: string;
  value?: string;
  options: string[];
  updateValue: (value: string) => void;
  className?: string;
  icon?: React.ReactNode;
  titleChange?: boolean;
  textColor?: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  value = "",
    active = false,
    updateValue,
  icon,
  className = "",
}) => {
    const handleChange = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      e.preventDefault();
      updateValue(value);
    };

    if (!icon) {
      icon = (
        <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        >
        <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
        ></path>
        </svg>
      );
    }

    return (
      <li
      className={`z-100 cursor-default hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-3 pr-9 ${className}`}
      onClick={handleChange}
      >
      <div className="flex items-center">
      <span className="ml-3 block font-normal truncate">{value}</span>
      </div>
      {active && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
        {icon}
        </span>
      )}
      </li>
    );
  };

  const Select: React.FC<SelectProps> = ({
    name = "customSelect",
      value = "",
      options = [],
      updateValue,
    className = "",
      titleChange = true,
      textColor = "text-black",
  }) => {
      const [state, setState] = useState({
        value,
        showOptions: false,
        buttonText: value,
      });

      const ref = useRef<HTMLDivElement>(null);

      const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setState((prevState) => ({
          ...prevState,
          showOptions: !prevState.showOptions,
        }));
      };

      const handleChange = (value: string) => {
        setState((prevState) => ({
          ...prevState,
          showOptions: false,
          value,
          buttonText: titleChange ? value : prevState.buttonText,
        }));
        updateValue(value);
      };

      const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setState((prevState) => ({ ...prevState, showOptions: false }));
        }
      };

      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

      const currentIcon = state.showOptions ? (
        <HiChevronUp className="text-xl" />
      ) : (
      <HiChevronDown className="text-xl" />
      );

      return (
        <div ref={ref} className="mt-1 relative z-20">
        <input type="hidden" name={name} value={state.value} />
        <button
        type="button"
        className={cn(
          "relative rounded-md pl-3 pr-10 py-3 text-left cursor-default outline-none",
          className,
          textColor
        )}
        onClick={handleClick}
        >
        <span className="flex items-center">
        <span className="ml-3 block truncate z-10">
        {state.buttonText}
        </span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        {currentIcon}
        </span>
        </button>
        {state.showOptions && (
          <div className="absolute mt-1 w-full text-gray-900 z-[9999] bg-white rounded-md shadow-lg">
          <ul
          className={`max-h-80 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none ${className}`}
          >
          {options.map((option, idx) => (
            <SelectOption
            key={idx}
            value={option}
            active={state.value === option}
            updateValue={handleChange}
            className={className}
            />
          ))}
          </ul>
          </div>
        )}
        </div>
      );
    };

    interface MobileProps {
      mobile?: boolean;
    }

    function LanguageSelect({ mobile }: MobileProps) {
      const router = useRouter();
      const locale = useLocale();
      const pathname = usePathname();

      const translatedPath = useCallback(
        (currentLocale: string, newLocale: string) => {
          const segments = pathname.split("/").filter(Boolean);
          const pathWithoutLocale = segments[0] === currentLocale
            ? `/${segments.slice(1).join("/")}`
            : pathname;

            const foundPath = Object.entries(pathnames).find(
              ([_, localizedPaths]: [string, any]) => {
                if (typeof localizedPaths === "object" && localizedPaths !== null) {
                  return localizedPaths[currentLocale] === pathWithoutLocale;
                }
                return false;
              }
            );

            if (foundPath) {
              const translatedPath = foundPath[1] as any;
              return `/${newLocale}${translatedPath[newLocale]}`;
            }

            return `/${newLocale}${pathWithoutLocale}`;
        },
        [pathname]
      );

      const onSelectChange = useCallback(
        (newLocale: string) => {
          if (newLocale === locale) return;

          const currentLocaleCookie = document.cookie.split('; ').find(row => row.startsWith('locale='));
          const currentLocale = currentLocaleCookie ? currentLocaleCookie.split('=')[1] : null;

          document.cookie = `locale=${newLocale}; path=/;`;

          const newPath = translatedPath(locale, newLocale);
          router.replace(newPath);
        },
        [locale, router, translatedPath]
      );

      const selectOptions = useMemo(() => {
        const languages = process.env.NEXT_PUBLIC_LANGUAGES;
        return languages ? languages.split(",") : [];
      }, []);

      return (
        <div className="flex items-center h-[20px] mt-[-3px] pl-[8px] rounded-md">
        <HiGlobeAlt
        className={`mr-[-16px] mt-[2px] text-xl ${
          mobile ? "text-[#efdd73]" : ""
        }`}
        />
        <Select
        value={locale}
        options={selectOptions}
        updateValue={onSelectChange}
        className="z-20 bg-transparent capitalize hover:cursor-pointer"
        textColor={`${mobile ? "text-[#efdd73]" : "text-white"}`}
        />
        </div>
      );
    }

    export default LanguageSelect;
