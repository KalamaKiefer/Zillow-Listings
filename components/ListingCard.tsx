import { Listing } from "@/lib/types";
import Image from "next/image";

export interface ListingCardProps {
    listing: Listing;
}

export const ListingCard = ({ listing }: ListingCardProps) => {
    return (
        <div className="bg-white rounded px-4 py-2 flex flex-col">
            <div className="aspect-square w-full h-40 relative">
                <Image
                    src={listing.imgSrc}
                    alt="zillow listing"
                    className="w-full h-full object-cover rounded"
                    fill
                />
            </div>

            <div className="mt-4">
                <p>{listing.bathrooms} Bathrooms</p>
                <p>{listing.bedrooms} Bedrooms</p>
                <p>
                    {listing.city} {listing.state}, {listing.country}
                </p>
                <p className="text-black">Price: {listing.price}</p>
            </div>
        </div>
    );
};
