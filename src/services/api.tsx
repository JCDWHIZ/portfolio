export const baseUrl = "https://portfolio-backend-d7ca.onrender.com";
export const fetchWithToken = async (
  url: string,
  method: "POST" | "GET" | "PUT" | "DELETE",
  body: any,
  headers = {},
  withImage: boolean
) => {
  console.log(withImage);
  const token = localStorage.token;
  const defaultheaders = {
    "Content-Type": "application/json",
    Authorization: "",
  };
  if (token) {
    defaultheaders["Authorization"] = `Bearer ${token}`;
  }
  const finalheaders = { ...defaultheaders, ...headers };

  try {
    const response = await fetch(baseUrl + url, {
      method,
      headers: finalheaders,
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const createArchive = async (formData: any) => {
  return await fetchWithToken("/archive", "POST", formData, {}, true);
};
