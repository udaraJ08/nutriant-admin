//Use this to convert json to form data
export const jsonToFormData = (obj) => {
    const formData = new FormData()
    Object.keys(obj).map(async e => {
        await formData.append(e, obj[e])
    })
    return formData
}
