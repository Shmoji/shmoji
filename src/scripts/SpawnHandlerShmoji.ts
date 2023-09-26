import { Behaviour, Button, GameObject, Gizmos, RaycastOptions, getParam, randomNumber, serializable, registerType, AssetReference } from "@needle-tools/engine";
import { Vector3, Euler, Object3D, Ray, Layers } from "three";
import { TouchpadShmoji } from "./TouchpadShmoji"
import { JoystickShmoji } from "./JoystickShmoji";
import { FirstPersonControllerShmoji } from "./FirstPersonCharacterShmoji"

const debug = getParam("debugspawnhandler")

@registerType
export class SpawnHandlerShmoji extends Behaviour {
    
    //array of Object3D
    @serializable(Object3D)
    spawnPoints: Object3D[] = [];

    // @type UnityEngine.UI.Button
    @serializable(Button)
    jumpButton?: Button;

    @serializable(TouchpadShmoji)
    lookTouchpad?: TouchpadShmoji

    @serializable(JoystickShmoji)
    moveJoystick?: JoystickShmoji

    private downVector = new Vector3(0, -1, 0);

    async handlePlayerSpawn(obj: Object3D) {
        if (typeof obj === "string") {
            obj = await AssetReference.getOrCreate(this.sourceId, obj, this.context)?.instantiate();
        }
        //shuffle spawnspots
        this.spawnPoints.sort(() => Math.random() - 0.5);

        const options = new RaycastOptions();
        options.layerMask = new Layers();
        options.layerMask.enableAll();
        options.ray = new Ray(new Vector3(), this.downVector.clone());
        options.maxDistance = 2;

        // Choose a random spawn point that is not occupied
        let spot: Object3D | undefined;

        for (let i = 0; i < this.spawnPoints.length; i++) {
            const element = this.spawnPoints[i];

            element.getWorldPosition(options.ray.origin);
            options.ray.origin.y += 3;

            options.ray.direction.copy(this.downVector);

            if(debug)
                Gizmos.DrawLine(options.ray.origin, options.ray.origin.clone().add(options.ray.direction.clone().multiplyScalar(options.maxDistance)), 0xff0000, 50, true);

            const result = this.context.physics.raycast(options);
            
            if(result.length == 0) {
                spot = element;
                break;
            }
        }

        // If there is no valid spawn point, set world 0,0,0
        const pos = spot?.position.clone() || new Vector3();
        const rot = spot?.rotation.clone() || new Euler();
        
        if(obj instanceof Object3D) {
            obj.worldToLocal(pos);
            
            obj.position.copy(pos);
            obj.rotation.copy(rot);
        }

        // hook touch controls to the spawned player
        const player = (obj as GameObject)?.getComponent(FirstPersonControllerShmoji);
        console.log('player==', player)
        if(player) {
            this.jumpButton?.onClick?.addEventListener(() => player.jump());
            this.lookTouchpad?.onDrag?.addEventListener((delta) => player.look(delta));
            this.moveJoystick?.onValueChanged?.addEventListener((delta) => player.move(delta));
        }
    }
}