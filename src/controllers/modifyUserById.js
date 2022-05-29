import { serverURL } from "../data/server";

export async function modifyUser(input,id,token) {
    const auth = token ? `JWT "${token}"` : null
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: auth ,
        },
        body: JSON.stringify({
            name: input.name.data,
            surname: input.surname.data,
            phone: input.phone.data,
        }),
    };
    const response = await fetch( serverURL + `api/users/${id}`,
    requestOptions
    );
    const data = await response.json();
    return data;
  }