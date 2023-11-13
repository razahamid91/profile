const ProfileDesign = () => {
    return (
        <div>
            <div className="profile-bg-image w-full h-44 sm:h-64 md:h-80"></div>
            <div className="profile-description flex flex-col justify-start items-start md:justify-center md:items-center gap-5 sm:gap-8 md:gap-10 px-2 sm:px-4 md:px-14">
                <div className="photo-intro gap-3 flex">
                    <div className="profile-photo border-2 -my-3 sm:-my-5 md:-my-12 border-gray-500 rounded-full w-16 h-16 sm:w-24 sm:h-24 md:w-44 md:h-44"></div>
                    <div className="profile-name py-2 mx-0 sm:mx-1 md:mx-2 flex flex-col gap-3 justify-start items-between">
                        <span className="name flex gap-2 justify-center items-center w-fit font-bold text-xl sm:text-2xl md:text-3xl">Abqari Abbas<i className="fa-regular fa-gem flex justify-center items-center p-1 text-xs sm:text-sm bg-purple-900 text-white w-5 h-5 rounded-full"></i><i className="fa-solid fa-check flex justify-center items-center p-1 text-xs sm:text-sm bg-green-400 text-black font-bold w-5 h-5 rounded-full"></i></span>
                        <div className="follow-details flex gap-4 font-bold text-base sm:text-md md:text-lg">
                            <div className="followers flex flex-col">
                                <span className="followers rounded-lg text-center px-2 sm:px-4 sm:py-1 border-2 text-gray-400 border-gray-400">6482</span>
                                <span className="text-center text-gray-400 text-sm sm:text-base font-medium">Followers</span>
                            </div>
                            <div className="following flex flex-col">
                                <span className="followers rounded-lg text-center px-2 sm:px-4 sm:py-1 border-2 text-gray-400 border-gray-400">245</span>
                                <span className="text-center text-gray-400 text-sm sm:text-base font-medium">Following</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photo-details flex flex-col gap-2 w-fit">
                    <h3 className="text-md md:text-lg">Co-founder and CEO of Terribly Tiny Tales</h3>
                    <a href="https://www.instagram.com/anujgosalia" className="text-blue-500 text-md md:text-lg" target="_blank" rel="noreferrer">https://www.instagram.com/anujgosalia</a>
                    <div className="reactions flex flex-col sm:flex-row flex-wrap p-1 gap-8 text-xs font-semibold">
                        <span className="flex gap-2"><i className="fa-regular fa-star flex justify-center items-center p-1 bg-cyan-600 text-white text-sm w-6 h-6 rounded-full"></i><span className="py-0.5 text-sm font-bold">125</span></span>
                        <span className="flex gap-2"><i className="fa-regular fa-thumbs-up flex justify-center items-center p-1 bg-yellow-600 text-white text-sm w-6 h-6 rounded-full"></i><span className="py-0.5 text-sm font-bold">12</span></span>
                        <span className="flex gap-2"><i className="fa-regular fa-eye flex justify-center items-center p-1 bg-gray-600 text-white text-sm w-6 h-6 rounded-full"></i><span className="py-0.5 text-sm font-bold">57.8K</span></span>
                        <span className="flex gap-2"><i className="fa-regular fa-heart flex justify-center items-center p-1 bg-red-600 text-white text-sm w-6 h-6 rounded-full"></i><span className="py-0.5 text-sm font-bold">26.0K</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDesign
