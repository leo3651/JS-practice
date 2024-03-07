import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const results = await response.json();

    console.log(response);
    console.log(results);

    if (!response.ok)
      throw new Error(`${results.message} (${response.status})`);

    return results;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPromise = fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(uploadData),
    });

    const response = await Promise.race(fetchPromise, timeout(TIMEOUT_SEC));
    const results = await response.json();

    if (!response.ok)
      throw new Error(`${results.message} (${response.status})`);
  } catch (err) {
    throw err;
  }
};
