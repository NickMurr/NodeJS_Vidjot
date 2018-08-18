if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: 'mongodb://nick:nikitadiana30@ds125342.mlab.com:25342/vidjot-nick-prod' };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' };
}

