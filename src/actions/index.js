export function setPageChange(ref) {
  if (ref.info) {
    return {
      page: {
        name: ref.to,
        payload: ref.info
      }
    };
  }
  return {
    page: {
      name:ref.to
    }
  };
}

export function changeNotifInput(event) {
  return {
    type: 'CHANGE_NOTIFICATION_INPUT',
    input: [event.target.getAttribute('name')],
    value: event.target.value
  };
}

export function removePhoto(pictureSrc) {
  return {
    type: 'REMOVE_PHOTO',
    pictureSrc
  }
}

export function addPhoto(event) {
  const photo = event.target.files[0];
  const pictureSrc = window.URL.createObjectURL(photo);
  const photoSrcDotArr = photo.name.split('.');
  const photoSrcExt = photoSrcDotArr[photoSrcDotArr.length - 1];
  return {
    type: 'ADD_PHOTO',
    pictureSrc
  };
}