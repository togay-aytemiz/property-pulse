import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  //   console.log(params); // returns { id: '65ed7d776854a4e55088d3cc' }
  try {
    await connectDB(); // Connect to database

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("Couldn't find the requested property", {
        status: 404,
      });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
