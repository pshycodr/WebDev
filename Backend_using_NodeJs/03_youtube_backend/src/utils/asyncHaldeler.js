// const asyncHandeler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             sucess: false,
//             message: err.message,
//         });
//     }
// };

const asyncHandeler = (requestHandeler) => {
    (req, res, next) => {
        Promise.resolve(requestHandeler(req, res, next)).catch((err) =>
            next(err)
        );
    };
};
export default asyncHandeler;
