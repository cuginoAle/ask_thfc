const error = "color: #ff0909; font-size: 14px; font-weight:bold";
const info = "color: #00a0ff; font-size: 14px; font-weight:bold";

const logError = (...msg) => console.warn(`%c${msg.join("\n")}`, error);
const logInfo = (...msg) => console.info(`%c${msg.join("\n")}`, info);

export { logError, logInfo };
