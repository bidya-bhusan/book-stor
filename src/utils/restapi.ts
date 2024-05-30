import { imgUrl } from "../assets/imageurl";
import { RandomPrice } from "../assets/imageurl";

const baseUrl: string = "https://freetestapi.com/api/v1";
const price = RandomPrice()
const allImages = imgUrl()

export async function fetchFromApi<T>(path: string): Promise<T> {
    const res = await fetch(`${baseUrl}/${path}?limit=5`);
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    const data = await res.json();


    if (Array.isArray(data)) {
        const updatedData = data.map((book, index) => ({
            ...book,
            cover_image: allImages[index],  // For Updating Image
            price: price[index]// Adding New Price
        }))

        return updatedData as unknown as T;
    }

    return data

}

export async function getCategories<F>(path: string): Promise<F> {
    
    const res = await fetch(`${baseUrl}/${path}?limit=5`);
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    const data = await res.json();
    if(Array.isArray(data)){
        const getCategory = data.map((categories) =>{
            return categories.genre;
        })

        return getCategory as unknown as F
    }

    return data
}









