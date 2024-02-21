export async function GET(request: Request) {
    const url =
        "https://zillow69.p.rapidapi.com/search?location=Honolulu%2C%20HI";

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "b53e91bd2cmsh516868f8c51e64ep151096jsn22019b67356d",
            "X-RapidAPI-Host": "zillow69.p.rapidapi.com",
        },
    };

    const listings = await fetch(url, options);
    const result = await listings.text();

    console.log(result);

    return Response.json("sucess", { status: 200 });
}
