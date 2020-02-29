export class UploadService {
    uploadWithImage(id, data, images, type) {
    let fd = new FormData()
    for(let key in data) {
        fd.append(key, data[key])
    }
    if(type === 'images') {
        images.forEach(i => fd.append(type, i, i.name))
    } else if(type === 'imageCover' || 'profilePic') {
    fd.append(type, images, images.name)
    } 
    return fd
}
}
