import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { HeartIcon, EyeIcon, FolderPlusIcon, Square2StackIcon } from '@heroicons/react/24/solid';
import _get from 'lodash.get';
import { NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';

import { Combobox, Transition } from '@headlessui/react';

interface HomePageProps {}

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
];

const HomePage: NextPage<HomePageProps> = () => {
    const [selected, setSelected] = React.useState(people[0]);
    const [query, setQuery] = React.useState('');

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => person.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')));

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="pt-8 px-[72px] flex w-full justify-start">
                <Combobox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                        <div className="relative w-full overflow-hidden text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                            <Combobox.Input
                                className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border-none focus:ring-0"
                                //@ts-ignore
                                displayValue={(person) => person.name}
                                onChange={(event) => setQuery(event.target.value)}
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            </Combobox.Button>
                        </div>
                        <Transition
                            as={React.Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery('')}
                        >
                            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {filteredPeople.length === 0 && query !== '' ? (
                                    <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">Nothing found.</div>
                                ) : (
                                    filteredPeople.map((person) => (
                                        <Combobox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                }`
                                            }
                                            value={person}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                        >
                                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )}
                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox>
            </div>
            <div className="flex flex-col items-center justify-center w-full px-[72px] pt-10">
                <div className="flex flex-col justify-center w-full gap-2.5 items-center">
                    <h1 className="font-bold text-[32px] text-[#0d0c22]">Interior Design</h1>
                    <p className="text-[#6e6d7a] mb-10 flex flex-col text-center">
                        <span>11,893 inspirational designs, illustrations, and graphic elements from the world’s best designers.</span>
                        <span>
                            Want more inspiration? Browse our{' '}
                            <Link href="/search">
                                <a className="text-[#ea4c89]">search results</a>
                            </Link>
                            ...
                        </span>
                    </p>
                </div>
                <div className="grid w-full grid-cols-4 grid-rows-5 gap-8">
                    {Array.from(Array(20).keys()).map((item) => (
                        <div key={item} className="w-full h-[294px] flex-col gap-2 flex text-white">
                            <div className="w-full h-[262px] rounded-lg overflow-hidden relative group">
                                <div className="absolute flex items-end justify-between w-full h-full p-5 duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-gray-900/50 to-transparent">
                                    <p className="text-lg font-semibold text-gray-100">Interior Design</p>
                                    <div className="flex items-center justify-center gap-2 text-gray-600">
                                        <button className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                                            <FolderPlusIcon className="w-5 h-5" />
                                        </button>
                                        <button className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                                            <HeartIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute w-6 h-6 text-white duration-300 opacity-100 group-hover:opacity-0 top-3 right-3">
                                    <Square2StackIcon className="w-full h-full" />
                                </div>
                                <img src="https://source.unsplash.com/random/800x800/?img=1" className="object-cover w-full h-full" alt="" />
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center justify-center gap-2 ">
                                    <div className="w-6 h-6 overflow-hidden rounded-full">
                                        <img src="https://source.unsplash.com/random/800x800/?img=1" className="w-full h-full" alt="" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">Rylic Studio</p>
                                    <div className="cursor-pointer px-[3px] py-0.5 uppercase text-[10px] rounded bg-gray-300 hover:bg-[#f082ac] text-white">
                                        PRO
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-700 ">
                                    <div className="flex items-center gap-1">
                                        <HeartIcon className="w-[14px] h-[14px] hover:text-[#f082ac] duration-300 cursor-pointer" />
                                        <p>143k</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <EyeIcon className="w-[14px] h-[14px] hover:text-[#f082ac] duration-300 cursor-pointer" />
                                        <p>143k</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
