module.exports = {
  port: process.env.PORT || 3000,
  mongoURL:
    process.env.MONGO_URL ||
    "mongodb+srv://root:root@cluster0.10g9w.mongodb.net/MomoCloneDB?retryWrites=true&w=majority"
};
