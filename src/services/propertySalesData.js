const URA_BASE_URL = `${import.meta.env.VITE_URA_BASE_URL}`
const URA_API_KEY = `${import.meta.env.VITE_URA_API_KEY}`
const URA_TOKEN = `${import.meta.env.VITE_URA_TOKEN}`

const propertySalesData = async () => {

    try {
        const res = await fetch(URA_BASE_URL, {
        headers: {
            AccessKey: URA_API_KEY,
            Token: URA_TOKEN,
        }});
        const data = await res.json()
        return data.records;
      } catch (error) {
        console.log(error);
      }
    };

  export { propertySalesData }