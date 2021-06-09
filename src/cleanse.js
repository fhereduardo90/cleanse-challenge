function cleanse(data = {}) {
  return Object.entries(data).reduce((prev, [key, value]) => {
    if (Array.isArray(value)) {
      return {
        ...prev,
        [key]: value.map(v => cleanse(v))
      }
    }

    if (typeof value === 'object' && value != null) {
      return {
        ...prev,
        [key]: cleanse(value)
      }
    }

    return {
      ...prev,
      ...(value !== null && value !== undefined && { [key]: value })
    }
  }, {})
}

module.exports = cleanse