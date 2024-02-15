/* eslint-disable */
import { TypeStore } from "@needle-tools/engine"

// Import types
import { FirstPersonCharacter2 } from "../scripts/FirstPersonCharacter2.js";
import { LockPointer2 } from "../scripts/LockPointer2.js";
import { RaycastPlayerCam } from "../scripts/RaycastPlayerCam.js";

// Register types
TypeStore.add("FirstPersonCharacter2", FirstPersonCharacter2);
TypeStore.add("LockPointer2", LockPointer2);
TypeStore.add("RaycastPlayerCam", RaycastPlayerCam);
