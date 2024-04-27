const BotWrapper = require("./wrapper.class");
/**
 * Crear 
 * @param {*} args
 * @returns
 */
const createDashboard = async (chatwootEnvs = {}, botInstance = null) => {
    if (!botInstance) throw new Error('NOT_BOT_INSTANCE')
    return BotWrapper.initialize(botInstance, {
        CHATWOOT_URL: "https://chatwoot.altoplano.mx",
        CHATWOOT_ID: "1",
        CHATWOOT_INBOX_ID: "22",
        CHATWOOT_API_ACCESS_TOKEN: "D1cy7rcKQmang1tqaUVXSQSh",
        ...chatwootEnvs
    });
}

module.exports = { createDashboard }