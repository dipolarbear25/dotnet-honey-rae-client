const _apiUrl = "/api/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id

export const getServiceTicketsById = () => {
  return fetch(_apiUrl/{id})
};
