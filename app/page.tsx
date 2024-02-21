import { Listings } from "@/components/Listings";

export default async function Home() {
    const url =
        "https://zillow56.p.rapidapi.com/search?location=honolulu%2C%20hi";

    // force cache to reduce api usage

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "b53e91bd2cmsh516868f8c51e64ep151096jsn22019b67356d",
            "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
        },
        cache: "force-cache",
    });
    const listings = await response.json();

    if (!listings) return;

    return (
        <div className="flex min-h-screen flex-col items-center justify-between">
            <Listings listings={listings.results} />
        </div>
    );
}
