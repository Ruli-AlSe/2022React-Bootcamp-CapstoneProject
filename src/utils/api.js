export async function getProducts(productsHook, apiUrl) {
  try {
    const controller = new AbortController();
    productsHook({ dataProducts: {}, isLoadingProducts: true });

    const response = await fetch(apiUrl, {
      signal: controller.signal,
    });
    const dataProducts = await response.json();

    productsHook({ dataProducts, isLoadingProducts: false });
  } catch (err) {
    productsHook({ dataProducts: {}, isLoadingProducts: false });
    console.error(err);
  }
}
