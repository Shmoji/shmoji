import { TypeStore } from "@needle-tools/engine"

// Import types
import { FirstPersonControllerShmoji } from "../scripts/FirstPersonCharacterShmoji.js";
import { IFrameContentShmoji } from "../scripts/IFrameContentShmoji.js";
import { JoystickShmoji } from "../scripts/JoystickShmoji.js";
import { LockPointerShmoji } from "../scripts/PointerLockShmoji.js";
import { RaycastPlayerCam } from "../scripts/RaycastPlayerCam.js";
import { SpawnHandlerShmoji } from "../scripts/SpawnHandlerShmoji.js";
import { TouchpadShmoji } from "../scripts/TouchpadShmoji.js";

// Register types
TypeStore.add("FirstPersonControllerShmoji", FirstPersonControllerShmoji);
TypeStore.add("IFrameContentShmoji", IFrameContentShmoji);
TypeStore.add("JoystickShmoji", JoystickShmoji);
TypeStore.add("LockPointerShmoji", LockPointerShmoji);
TypeStore.add("RaycastPlayerCam", RaycastPlayerCam);
TypeStore.add("SpawnHandlerShmoji", SpawnHandlerShmoji);
TypeStore.add("TouchpadShmoji", TouchpadShmoji);
