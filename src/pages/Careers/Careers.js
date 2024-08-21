import { useLoaderData, Link } from "react-router-dom";
import "./careers.css"

function Careers() {
    const careers = useLoaderData();

    console.log("Careers data in component:", careers);  // Should log the fetched data

    if (!careers || !Array.isArray(careers)) {
        return <p>No careers available or failed to load.</p>;
    }

    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={`${career.id}`} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    );
}

export default Careers;



// Loader function
export const careersLoader = async () => {
    try {
        const res = await fetch("http://localhost:4000/careers");

        if (!res.ok) {
            throw new Error(`Failed to fetch careers: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Fetched careers data:", data);  // This should log the fetched data

        return data;
    } catch (error) {
        console.error("Error fetching careers:", error.message, {
            stack: error.stack,
            url: "http://localhost:4000/careers"
        });
        return [];
    }
};

