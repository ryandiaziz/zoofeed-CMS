import axios, { Axios } from "axios";
const URL = "http://54.206.202.155:3000/api/habitats";

const getHabitat = async (cb) => {
    try {
        let habitat = await axios(
            {
                method: "GET",
                url: URL,
            }
        );

        cb(habitat.data);
    } catch (err) {
        console.log(err);
    }
};

const detailHabitat = async (id, cb) => {
    try {
        let classDetail = await axios(
            {
                method: "GET",
                url: URL + '/detail/' + id,
            }
        );

        cb(classDetail.data)
    } catch (err) {
        console.log(err);
    }
};

export {
    getHabitat,
    detailHabitat
}