import React from 'react'
import avatar from '../assets/profile.png'
const SideBar = () => {
    return (
        <>
            <div className="container flex flex-col mx-auto bg-white">
                <aside
                    className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-zinc-50"
                    id="sidenav-main"
                >
                    <div className="hidden  lg:block "></div>

                    <div className="flex items-center justify-between px-8 py-5">
                        <div className="flex items-center mr-5">
                            <div className="mr-5">
                                <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                                    <img
                                        src={avatar}
                                        alt="avatar image"
                                        className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                                    />
                                </div>
                            </div>
                            <div className="mr-2 ">
                                <a
                                    href="#"
                                    className=" hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium  text-secondary-inverse"
                                >
                                    Yahya Ben Arbia
                                </a>
                                <span className="text-secondary-dark  font-medium block text-[0.85rem]">1 project</span>
                            </div>
                        </div>

                    </div>

                    <div className="hidden border-b  lg:block  border-neutral-200"></div>

                    <div className="relative pl-3 my-5  ">
                        <div className="flex flex-col w-full font-medium">
                            <div>
                                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                                    <p className="flex items-center flex-grow text-[1.15rem]  text-primary hover:text-dark ">
                                        Profile
                                    </p>
                                </span>
                                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                                    <p className="flex items-center flex-grow text-[1.15rem]  text-primary hover:text-dark ">
                                        Dashboard
                                    </p>
                                </span>
                                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                                    <p className="flex items-center flex-grow text-[1.15rem]  text-primary hover:text-dark ">
                                        Managment
                                    </p>
                                </span>
                            </div>

                        </div>
                    </div>
                </aside>
            </div>



        </>
    )
}

export default SideBar