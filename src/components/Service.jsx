async function fetchWithToken(
  url,
  method,
  body = null,
  headers = {},
  withImage = false
) {
  const token = localStorage.getItem("token");
  const defaultheaders = {
    "Content-Type": "application/json",
  };
  if (token) {
    defaultheaders["Authorization"] = `Bearer ${token}`;
  }
  const finalheaders = { ...defaultheaders, ...headers };

  try {
    const response = await fetch(url, {
      method,
      headers: finalheaders,
      body: body
        ? JSON.stringify(body)
        : (withImage = true ? body : JSON.stringify(body)),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }

    return await response.json(); // Parse JSON response
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export default fetchWithToken;
