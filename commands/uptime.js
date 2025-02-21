module.exports = {
    name: "uptime",
    aliases: ["ut"],
    cooldown: 2,
    execute(client, message, args) {
        var milliseconds = parseInt((client.uptime % 1000) / 100),
            seconds = parseInt((client.uptime / 1000) % 60),
            minutes = parseInt((client.uptime / (1000 * 60)) % 60),
            hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24),
            days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 60);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        message.channel.send(
            ":chart_with_upwards_trend: I've been running for** " +
                days +
                " **days, **" +
                hours +
                " **hours, **" +
                minutes +
                "** minutes and **" +
                seconds +
                "." +
                milliseconds +
                "** seconds!"
        );
    },
};
