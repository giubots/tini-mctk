import Papa from "papaparse";

export const parseKb = (url, activeModules) => {
  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      quoteChar: '"',
      escapeChar: '"',
      header: true,
      complete: (results) => {
        const filtered = results.data.filter(({ module }) => {
          return activeModules.includes(module);
        });
        resolve(filtered);
      },
      error: (error) => {
        reject(error);
      },
      download: true,
    });
  });
};

export const getJson = async (url) => {
  const res = await fetch(url);
  return await res.json();
};
