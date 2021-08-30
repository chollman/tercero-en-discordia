import FormData from "form-data";

export const rawToForm = (formProps) => {
    const form = new FormData();
    for (let key in formProps) {
        if (formProps.hasOwnProperty(key)) {
            form.append(key, formProps[key]);
        }
    }
    return form;
};

export const extractIds = (array) => {
    let resultArr;
    resultArr = array.map((obj) => {
        return obj._id;
    });
    return resultArr;
};
