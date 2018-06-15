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