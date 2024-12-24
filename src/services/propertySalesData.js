const URA_API_KEY = `${import.meta.env.VITE_URA_API_KEY}`
const URA_TOKEN = `${import.meta.env.VITE_URA_TOKEN}`

const propertySalesData = async (token) => {

    try {
        const res = await fetch("/api", {
          headers: {
              AccessKey: URA_API_KEY,
              Token: token,
              "Accept": "application/json"
          },
        });
        const data = await res.json()
        return data.Result;
      } catch (error) {
        console.log(error);
      }
    };

  export { propertySalesData }