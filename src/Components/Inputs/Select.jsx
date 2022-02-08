import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import "iransbankicon";
import { useEffect } from "react";

export default function Select({ banks, setBankName }) {
  const [selected, setSelected] = useState(banks[0]);

  useEffect(() => {
    setBankName(selected.name);
  }, [selected]);

  return (
    <div className="md:w-[720px] w-full z-40">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="outline-none rounded-2xl pl-5 py-3 border border-Light-20 focus:border-Violet-100 relative w-full pr-10 text-left">
            <div className="flex items-center">
              <span className="block truncate">{selected.name}</span>
              <i className={`bank32 ${selected.icon}`} />
            </div>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="w-5 h-5 text-gray-400" />
            </span>
          </Listbox.Button>
          <Transition>
            <p className="bg-Dark-100 opacity-60 text-Light-100 text-s rounded-lg py-1 w-full absolute top-0">
              برای مشاهده بیشتر اسکرول کنید
            </p>
            <Listbox.Options className="absolute -top-[260px] h-[250px] w-full py-1 mt-1 bg-Light-100 shadow-sm border border-[#F9F7FE] rounded-2xl overflow-scroll">
              {banks.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${
                      active ? "text-Violet-100 bg-[#F9F7FE]" : "text-Dark-100"
                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <div className="flex justify-center items-center">
                      <span
                        className={`${
                          selected
                            ? "font-medium text-Violet-100"
                            : "font-normal"
                        } block truncate`}
                      >
                        {person.name}
                      </span>
                      <i className={`bank32 ${person.icon}`} />
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-Violet-100" : "text-Violet-100"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
