import { useLoaderData, useParams } from "react-router-dom";
import "./careerdetail.css";

function CareersDetail() {
    const { id } = useParams(); // eslint-disable-line no-unused-vars
    const career = useLoaderData();

    return (
        <div className="careerdetails">
            <h2>Career Detail for {career.title}</h2>
            <p>Starting salary: ${career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    );
}

export default CareersDetail;

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;
    console.log(`Fetching details for career ID: ${id}`);
    
    try {
        const res = await fetch(`http://localhost:4000/careers/${id}`);
        
        if (!res.ok) {
            console.error('Fetch error:', res.statusText);
            throw new Error(`Failed to fetch career details: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
    }
};
