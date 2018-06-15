export default function setPageChange(ref) {
  let payload;
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
    };
  };
}