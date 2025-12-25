export const errorHandler = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        name: err.name || "ERROR",
        message: err.message || "Lỗi hệ thống",
    });
};