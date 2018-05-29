const moment = require('moment');

class Logger {
  constructor() {
    this.logger = console;
  }

  logMessage(message) {
    const date = moment(message.date * 1000);
    const author = message.from;
    this.logger.log(`[${date.format('DD.MM.YYYY HH:mm:ss')}] {id: ${author.id}, username: ${author.username}, first_name: ${author.first_name}} ${message.text}`);
  }
}

module.exports = Logger;
