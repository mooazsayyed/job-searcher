// app-backend/src/controllers/healthController.js

exports.getHealth = async (req, res) => {
  const timestamp = new Date();
  res.status(200).json({
    status: 'ok',
    message: 'Service is healthy',
    timestamp: timestamp.toISOString(),
  });
};