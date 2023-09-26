import {
  Behaviour,
  showBalloonMessage,
  Gizmos,
  serializable,
  EventList
} from '@needle-tools/engine'
import * as THREE from 'three'

export class RaycastPlayerCam extends Behaviour {
  @serializable(EventList)
  video1?: EventList

  update(): void {
    if (this.context.input.getPointerPressed(0)) {
      console.log('getPointerPressed')
      const camera = this.context.mainCamera as THREE.Camera
      const origin = new THREE.Vector3()
      camera.getWorldPosition(origin)

      const target = new THREE.Vector3()
      camera.getWorldDirection(target)

      console.log('origin==', origin)
      console.log('target==', target)

      const hit = this.context.physics.engine?.raycast(origin, target)

      console.log('hit==', hit)

      if (hit) {

        

        if (hit.collider.name === 'Video1') {
          this.video1?.invoke()
        }

        showBalloonMessage('hit ' + hit.collider.name)
        Gizmos.DrawWireSphere(hit.point, 0.05, 0xff0000, 1)

      }
    }
  }
}
