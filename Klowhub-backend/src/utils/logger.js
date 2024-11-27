import { createLogger, transports, format } from "winston";

const logger = createLogger({
  level: "info", // Nivel de log (opciones: error, warn, info, http, verbose, debug, silly)
  format: format.combine(
    format.timestamp(), // Agregar marca de tiempo a los logs
    format.json() // Formatear los logs en formato JSON
  ),
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }), // Registrar errores en error.log
    new transports.File({ filename: "logs/combined.log" }), // Registrar todos los niveles en combined.log
  ],
});

// Mostrar logs en la consola en modo desarrollo
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

export default logger;
