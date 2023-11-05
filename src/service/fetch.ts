export const fetchService = async (
  url: string,
  method: string,
  headers: { [key: string]: string },
  body: any,
  contentType: string
) => {
  try {
    const response = await fetch(url, {
      method,
      headers,
      body:
        contentType === 'application/json'
          ? JSON.stringify(body)
          : new URLSearchParams(body)
    })

    if (!response.ok) {
      throw new Error(`Error al hacer la solicitud: ${response.statusText}`)
    }

    return await response.json()
  } catch (error: any) {
    throw new Error(`Error en la solicitud: ${error.message}`)
  }
}
