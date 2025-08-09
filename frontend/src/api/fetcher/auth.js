// fetchers.js con funciones genéricas que reciben la URL base

export async function getItems(url, id = "") {
  const fullUrl = id ? `${url}/${id}` : url;
  const response = await fetch(fullUrl);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al obtener datos");
  }
  return response.json();
}

export async function createItem(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al crear item");
  }
  return response.json();
}

export async function updateItem(url, id, data) {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al actualizar item");
  }
  return response.json();
}

export async function deleteItem(url, id) {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al eliminar item");
  }
  return response.json();
}
