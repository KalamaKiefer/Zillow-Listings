import { Listing } from "@/lib/types";
import { ListingCard } from "./ListingCard";

export interface ListingProps {
    listings: Array<Listing>;
}

export const Listings = ({ listings }: ListingProps) => {
    return (
        <section className="max-w-4xl mx-auto w-full pb-20">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 px-10">
                {listings.map((listing) => {
                    return <ListingCard listing={listing} key={listing.zpid} />;
                })}
            </div>
        </section>
    );
};
