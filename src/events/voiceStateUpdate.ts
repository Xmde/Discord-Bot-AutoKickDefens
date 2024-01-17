import { Client, VoiceState } from "discord.js";
import { BotEvent } from "../types";
import { color } from "../functions";

const event : BotEvent = {
    name: "voiceStateUpdate",
    once: false,
    execute: (_ : VoiceState, newState : VoiceState) => {
        if (newState.selfDeaf) newState.disconnect();
    }
}

export default event;