const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//  Fetch All Properties
async function fetchProperties() {
  try {
    // Handle the case where the domain is not available yet

    if (!apiDomain) return null;
    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error("Could not get properties");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

//  Fetch Single property
async function fetchProperty(id) {
  try {
    // Handle the case where the domain is not available yet

    if (!apiDomain) return null;
    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Could not get properties");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
