import { ZillowIcon } from "./icons/ZillowIcon";

export const Header = () => {
    return (
        <header className="py-10 lg:py-20">
            <div className="flex gap-3 items-center justify-center border-b-2 mx-10 pb-2 lg:pb-4 lg:mx-48">
                <ZillowIcon className="text-white w-6 h-6" />
                <h1 className="font-semibold font-sans text-2xl lg:text-4xl text-white">
                    Zillow Listings
                </h1>
            </div>
        </header>
    );
};
