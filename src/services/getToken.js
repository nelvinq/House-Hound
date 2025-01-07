const URA_API_KEY = `${import.meta.env.VITE_URA_API_KEY}`;

const getToken = async () => {
        try {
          const res = await fetch("https://www.ura.gov.sg/uraDataService/insertNewToken.action", {
            headers: {
              AccessKey: URA_API_KEY,
              "Content-Type": "application/json"
            },
          });
          const data = await res.json()
          return data.Result;
        } catch (error) {
          console.log(error);
        }
      };

export { getToken }