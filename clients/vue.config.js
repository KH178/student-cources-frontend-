module.exports = {
    devServer: {
        // open: process.platform === 'darwin',
        port: 8080, // CHANGE YOUR PORT HERE!
        https: true,
        hotOnly: false,
        public: "0.0.0.0",
        proxy: 'http://localhost:3000'
    },
}   