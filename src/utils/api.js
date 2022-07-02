export async function getDataFromAPI(setData, apiUrl, controller) {
  try {
    setData({ data: {}, isLoading: true });

    const response = await fetch(apiUrl, {
      signal: controller.signal,
    });
    const data = await response.json();

    setData({ data, isLoading: false });
  } catch (err) {
    setData({ data: {}, isLoading: false });
    console.error(err);
  }
}
