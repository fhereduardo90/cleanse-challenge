function cleanse(data = {}) {
  return Object.entries(data).reduce((prev, [key, value]) => {
    if (Array.isArray(value)) {
      return {
        ...prev,
        [key]: value.map(v => cleanse(v))
      }
    }

    return {
      ...prev,
      ...(value !== null && value !== undefined && { [key]: value })
    }
  }, {})
}

module.exports = cleanse