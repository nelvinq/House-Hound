const URA_API_KEY = `${import.meta.env.VITE_URA_API_KEY}`

const propertySalesData = async (token) => {

    try {
        const res = await fetch("https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Transaction&batch=1", {
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