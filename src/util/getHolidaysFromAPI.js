const getHolidaysByYear = (year) => {
  return fetch(
    `https://api.api-ninjas.com/v1/holidays?country=US&year=${year}`,
    {
      method: "GET",
      headers: { "X-Api-Key": "PF3n7BIaSlGjQaBmfasuww==iui3kGA7br0VXfbQ" },
      contentType: "application/json",
    }
  ).then((response) => response.json());
};

export default getHolidaysByYear;
