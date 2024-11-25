const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  level: "info", // Log level (options: error, warn, info, http, verbose, debug, silly)
  format: format.combine(
    format.timestamp(), // Add timestamp to logs
    format.json() // Format logs as JSON
  ),
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }), // Log errors to error.log
    new transports.File({ filename: "logs/combined.log" }), // Log all levels to combined.log
  ],
});

// Log to the console in development mode
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

module.exports = logger;
