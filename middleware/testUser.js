const testUser = async (req, res, next) => {
  if (req.user.testUser) {
    const newError = new Error('Only read permission for test users!')
    newError.status = 401
    throw newError
  }

  next()
}

module.exports = testUser
