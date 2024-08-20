import client from "./contentful";

const fetchEntries = async (contentType) => {
  const res = await client.getEntries({ content_type: contentType });
  if (res.items) {
    console.log(`${res.items.length} items found for ${contentType}`);
    return res.items;
  }
  console.log(`NO items found for ${contentType}`);
  return ["No products found"];
};

export async function getProducts() {
  return fetchEntries("products");
}

export async function getCategories() {
  return fetchEntries("categories");
}

export async function getCoverPhotos() {
  return fetchEntries("coverPhotos");
}
/*
export async function getProducts() {
  const res = await client.getEntries({ content_type: "products" });
  if (res.items) {
    return res.items;
  }
  return ["no products found"];
}

export async function getCategories() {
  const res = await client.getEntries({ content_type: "categories" });
  if (res.items) {
    return res.items;
  }
  return ["no categories found"];
}

export async function getCoverPhotos() {
  const res = await client.getEntries({ content_type: "coverPhotos" });

  if (res.items) {
    return res.items;
  }
  return ["no items found"];
}
*/
