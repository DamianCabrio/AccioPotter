export const get = async (endpoint: string, name: string) => {
  try {
    let serviceResponse;

    const response = await fetch(endpoint);
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }

    return serviceResponse;
  } catch (error) {
    console.log(`Error fetching ${name}: `, error);
    return {
      success: false,
      data: error,
    };
  }
};
